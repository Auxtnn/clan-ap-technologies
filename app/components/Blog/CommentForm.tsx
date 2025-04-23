// "use client";

// import { useState } from "react";
// import { submitComment } from "@/app/utils/blog";
// import { CommentFormData, WordPressComment } from "@/app/types";

// interface CommentFormProps {
//   postId: number;
//   parentId?: number | null;
//   onCommentAdded: (comment: WordPressComment) => void;
// }

// export function CommentForm({
//   postId,
//   parentId = null,
//   onCommentAdded,
// }: CommentFormProps) {
//   const [formData, setFormData] = useState<CommentFormData>({
//     author_name: "",
//     author_email: "",
//     content: "",
//     post: postId,
//     ...(parentId && { parent: parentId }),
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState<{
//     type: "success" | "error";
//     text: string;
//   } | null>(null);

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.author_name.trim()) {
//       newErrors.author_name = "Name is required";
//     }

//     if (!formData.author_email.trim()) {
//       newErrors.author_email = "Email is required";
//     } else {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(formData.author_email)) {
//         newErrors.author_email = "Please enter a valid email address";
//       }
//     }

//     if (!formData.content.trim()) {
//       newErrors.content = "Comment is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     // Clear error for this field if it exists
//     if (errors[name]) {
//       setErrors((prev) => {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }

//     // Clear any previous submission messages
//     if (submitMessage) {
//       setSubmitMessage(null);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       setIsSubmitting(true);
//       const newComment = await submitComment(formData);

//       if (newComment) {
//         onCommentAdded(newComment);
//         setSubmitMessage({
//           type: "success",
//           text: "Your comment has been submitted and is awaiting moderation.",
//         });

//         // Reset form
//         setFormData({
//           author_name: "",
//           author_email: "",
//           content: "",
//           post: postId,
//           ...(parentId && { parent: parentId }),
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting comment:", error);
//       setSubmitMessage({
//         type: "error",
//         text: "Failed to submit your comment. Please try again later.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {submitMessage && (
//         <div
//           className={`p-4 rounded-md ${
//             submitMessage.type === "success"
//               ? "bg-green-50 text-green-700"
//               : "bg-red-50 text-red-700"
//           }`}
//         >
//           <p>{submitMessage.text}</p>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label
//             htmlFor="author_name"
//             className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Name *
//           </label>
//           <input
//             type="text"
//             id="author_name"
//             name="author_name"
//             value={formData.author_name}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-md ${
//               errors.author_name ? "border-red-500" : "border-gray-300"
//             } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
//           />
//           {errors.author_name && (
//             <p className="mt-1 text-sm text-red-600">{errors.author_name}</p>
//           )}
//         </div>

//         <div>
//           <label
//             htmlFor="author_email"
//             className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Email * (will not be published)
//           </label>
//           <input
//             type="email"
//             id="author_email"
//             name="author_email"
//             value={formData.author_email}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-md ${
//               errors.author_email ? "border-red-500" : "border-gray-300"
//             } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
//           />
//           {errors.author_email && (
//             <p className="mt-1 text-sm text-red-600">{errors.author_email}</p>
//           )}
//         </div>
//       </div>

//       <div>
//         <label
//           htmlFor="content"
//           className="block text-sm font-medium text-gray-700 mb-2"
//         >
//           Comment *
//         </label>
//         <textarea
//           id="content"
//           name="content"
//           rows={6}
//           value={formData.content}
//           onChange={handleChange}
//           className={`w-full px-4 py-2 border rounded-md ${
//             errors.content ? "border-red-500" : "border-gray-300"
//           } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
//         />
//         {errors.content && (
//           <p className="mt-1 text-sm text-red-600">{errors.content}</p>
//         )}
//       </div>

//       <div>
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className={`px-6 py-3 text-white font-medium rounded-md ${
//             isSubmitting
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-yellow-500 hover:bg-yellow-600"
//           } transition-colors`}
//         >
//           {isSubmitting ? "Submitting..." : "Post Comment"}
//         </button>
//       </div>
//     </form>
//   );
// }
