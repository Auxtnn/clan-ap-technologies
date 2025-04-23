// "use client";

// import { useState, useEffect } from "react";
// import { fetchComments, organizeCommentThreads } from "@/app/utils/blog";
// import { WordPressPost, WordPressComment } from "@/app/types";
// import { CommentList } from "./CommentList";
// import { CommentForm } from "./CommentForm";

// interface CommentSectionProps {
//   post: WordPressPost;
// }

// export function CommentSection({ post }: CommentSectionProps) {
//   const [comments, setComments] = useState<WordPressComment[]>([]);
//   const [organizedComments, setOrganizedComments] = useState<
//     WordPressComment[]
//   >([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [replyTo, setReplyTo] = useState<number | null>(null);

//   // Fetch comments on component mount
//   useEffect(() => {
//     async function loadComments() {
//       try {
//         setLoading(true);
//         const fetchedComments = await fetchComments(post.id);
//         setComments(fetchedComments);
//         setOrganizedComments(organizeCommentThreads(fetchedComments));
//         setError(null);
//       } catch (err) {
//         console.error("Failed to load comments:", err);
//         setError("Failed to load comments. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadComments();
//   }, [post.id]);

//   // Handle new comment added
//   const handleCommentAdded = (newComment: WordPressComment) => {
//     // Add the new comment to our list
//     const updatedComments = [...comments, newComment];
//     setComments(updatedComments);

//     // Re-organize the comments
//     setOrganizedComments(organizeCommentThreads(updatedComments));

//     // Clear reply state if this was a reply
//     setReplyTo(null);
//   };

//   // Handle reply to comment
//   const handleReply = (commentId: number) => {
//     setReplyTo(commentId);

//     // Scroll to the comment form
//     const formElement = document.getElementById("comment-form");
//     if (formElement) {
//       formElement.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Cancel replying
//   const handleCancelReply = () => {
//     setReplyTo(null);
//   };

//   return (
//     <section className="mt-16 pt-8 border-t border-gray-100">
//       <h2 className="text-2xl font-bold text-gray-800 mb-8">
//         Comments
//         {comments.length > 0 && ` (${comments.length})`}
//       </h2>

//       {loading ? (
//         <div className="flex justify-center my-8">
//           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-500"></div>
//         </div>
//       ) : error ? (
//         <div className="p-4 bg-red-50 text-red-700 rounded-md">
//           <p>{error}</p>
//         </div>
//       ) : (
//         <>
//           {comments.length > 0 ? (
//             <CommentList comments={organizedComments} onReply={handleReply} />
//           ) : (
//             <div className="text-center py-6 bg-gray-50 rounded-lg">
//               <p className="text-gray-600">
//                 No comments yet. Be the first to comment!
//               </p>
//             </div>
//           )}
//         </>
//       )}

//       <div id="comment-form" className="mt-12">
//         <h3 className="text-xl font-bold text-gray-800 mb-6">
//           {replyTo ? "Reply to Comment" : "Leave a Comment"}
//         </h3>

//         {replyTo && (
//           <div className="mb-4 p-3 bg-gray-50 rounded-md flex justify-between items-center">
//             <p className="text-gray-600">Replying to comment #{replyTo}</p>
//             <button
//               onClick={handleCancelReply}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               Cancel reply
//             </button>
//           </div>
//         )}

//         <CommentForm
//           postId={post.id}
//           parentId={replyTo}
//           onCommentAdded={handleCommentAdded}
//         />
//       </div>
//     </section>
//   );
// }
