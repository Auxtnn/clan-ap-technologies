// app/calendar/page.tsx
"use client";

import { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  Plus,
  ChevronLeft,
  ChevronRight,
  Users,
  MapPin,
  Video,
  Phone,
  FileText,
  Edit,
  Trash2,
  Filter,
} from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
  type: "meeting" | "project" | "deadline" | "personal";
  attendees: string[];
  location?: string;
  isVirtual?: boolean;
  status: "confirmed" | "tentative" | "cancelled";
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<"month" | "week" | "day">("month");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showEventModal, setShowEventModal] = useState(false);

  const events: Event[] = [
    {
      id: "1",
      title: "Project Kickoff - E-commerce Platform",
      description: "Initial project meeting with TechCorp Solutions team",
      start: "2024-02-20T10:00:00",
      end: "2024-02-20T11:30:00",
      type: "meeting",
      attendees: ["John Doe", "Jane Smith", "Client Team"],
      location: "Conference Room A",
      status: "confirmed",
    },
    {
      id: "2",
      title: "QA Review Session",
      description: "Weekly QA review and testing discussion",
      start: "2024-02-21T14:00:00",
      end: "2024-02-21T15:00:00",
      type: "meeting",
      attendees: ["QA Team", "Mike Johnson"],
      isVirtual: true,
      status: "confirmed",
    },
    {
      id: "3",
      title: "Client Presentation",
      description: "Present mobile app QA results to StartupXYZ",
      start: "2024-02-22T16:00:00",
      end: "2024-02-22T17:00:00",
      type: "meeting",
      attendees: ["Sarah Wilson", "Client"],
      isVirtual: true,
      status: "tentative",
    },
    {
      id: "4",
      title: "Project Deadline - Website Redesign",
      description: "Final delivery for DesignCo Agency website",
      start: "2024-02-25T23:59:00",
      end: "2024-02-25T23:59:00",
      type: "deadline",
      attendees: ["Alex Chen", "Lisa Park"],
      status: "confirmed",
    },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const getEventsForDate = (date: Date) => {
    const dateStr = date.toISOString().split("T")[0];
    return events.filter((event) => event.start.split("T")[0] === dateStr);
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "meeting":
        return "bg-blue-500 text-white";
      case "project":
        return "bg-green-500 text-white";
      case "deadline":
        return "bg-red-500 text-white";
      case "personal":
        return "bg-purple-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const formatTime = (dateStr: string) => {
    return new Date(dateStr).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const monthYear = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const todayEvents = getEventsForDate(new Date());
  const upcomingEvents = events
    .filter((event) => new Date(event.start) > new Date())
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
    .slice(0, 5);

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between  gap-10 md:flex-row flex-col">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-600 mt-1">
            Manage your schedule and upcoming events
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setView("month")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                view === "month"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setView("week")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                view === "week"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setView("day")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                view === "day"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Day
            </button>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus className="h-4 w-4" />
            <span>New Event</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Calendar */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">{monthYear}</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigateMonth("prev")}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setCurrentDate(new Date())}
                className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Today
              </button>
              <button
                onClick={() => navigateMonth("next")}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
            {/* Day Headers */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="bg-gray-50 p-3 text-center">
                <span className="text-sm font-medium text-gray-700">{day}</span>
              </div>
            ))}

            {/* Calendar Days */}
            {getDaysInMonth(currentDate).map((date, index) => {
              const isToday =
                date && date.toDateString() === new Date().toDateString();
              const dayEvents = date ? getEventsForDate(date) : [];

              return (
                <div
                  key={index}
                  className={`bg-white p-2 min-h-[100px] border-t border-gray-100 ${
                    date ? "hover:bg-gray-50 cursor-pointer" : ""
                  }`}
                  onClick={() => date && setSelectedDate(date)}
                >
                  {date && (
                    <>
                      <div
                        className={`text-sm font-medium mb-1 ${
                          isToday
                            ? "bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center"
                            : "text-gray-900"
                        }`}
                      >
                        {date.getDate()}
                      </div>
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className={`text-xs px-2 py-1 rounded truncate ${getEventTypeColor(
                              event.type
                            )}`}
                          >
                            {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-gray-500 px-2">
                            +{dayEvents.length - 2} more
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Today's Events */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Today's Events
            </h3>
            {todayEvents.length > 0 ? (
              <div className="space-y-3">
                {todayEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div
                      className={`w-3 h-3 rounded-full mt-1.5 ${getEventTypeColor(
                        event.type
                      ).replace("text-white", "")}`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm truncate">
                        {event.title}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {formatTime(event.start)} - {formatTime(event.end)}
                      </p>
                      {event.location && (
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {event.location}
                        </p>
                      )}
                      {event.isVirtual && (
                        <p className="text-xs text-blue-600 flex items-center mt-1">
                          <Video className="h-3 w-3 mr-1" />
                          Virtual Meeting
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">
                No events scheduled for today
              </p>
            )}
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Upcoming Events
            </h3>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                >
                  <div
                    className={`w-3 h-3 rounded-full mt-1.5 ${getEventTypeColor(
                      event.type
                    ).replace("text-white", "")}`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm truncate">
                      {event.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(event.start).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      at {formatTime(event.start)}
                    </p>
                    {event.attendees.length > 0 && (
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <Users className="h-3 w-3 mr-1" />
                        {event.attendees.length} attendees
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <Plus className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium">Schedule Meeting</span>
              </button>
              <button className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <CalendarIcon className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium">Block Time</span>
              </button>
              <button className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <Users className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium">Team Availability</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
