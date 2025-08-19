"use client";
import { useState } from "react";
import { Download, Plus } from "lucide-react";

import FinancialStats from "@/app/components/Financial/FinancialStats";
import RevenueChart from "@/app/components/Dashboard/RevenueChart";
import ExpenseBreakdown from "@/app/components/Financial/ExpenseBreakdown";
import RecentInvoices from "@/app/components/Financial/RecentInvoices";
import CashFlowChart from "@/app/components/Financial/CashFlowChart";
import FinancialAlerts from "@/app/components/Financial/FinancialAlerts";
import AddInvoiceModal from "@/app/components/modals/AddInvoiceModal";

export default function FinancialPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const handleAddInvoice = (data: any) => {
    console.log("New invoice data:", data);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between gap-10 md:flex-row flex-col">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Financial Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Monitor your business financial health and performance
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>New Invoice</span>
          </button>
        </div>
      </div>

      {/* Financial Stats */}
      <FinancialStats />

      {/* Financial Alerts */}
      <FinancialAlerts />

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <CashFlowChart />
      </div>

      {/* Secondary Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentInvoices />
        </div>
        <ExpenseBreakdown />
      </div>
      <AddInvoiceModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddInvoice}
      />
    </div>
  );
}
