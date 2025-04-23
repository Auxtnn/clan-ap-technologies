// import { WordPressComment } from "@/app/types";
// import { formatCommentDate } from "@/app/utils/blog";
// import Image from "next/image";

// interface CommentItemProps {
//   comment: WordPressComment;
//   onReply: (commentId: number) => void;
// }

// export function CommentItem({ comment, onReply }: CommentItemProps) {
//   const formattedDate = formatCommentDate(comment.date);
//   const avatarUrl = comment.author_avatar_urls?.["96"] || "/default-avatar.png";

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//       <div className="flex items-start space-x-4">
//         <div className="flex-shrink-0">
//           <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
//             <Image
//               src={avatarUrl}
//               alt={`${comment.author_name}'s avatar`}
//               width={40}
//               height={40}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>

//         <div className="flex-1 min-w-0">
//           <div className="flex justify-between items-start">
//             <div>
//               <h4 className="text-sm font-medium text-gray-900">
//                 {comment.author_name}
//               </h4>
//               <p className="text-xs text-gray-500">{formattedDate}</p>
//             </div>

//             <button
//               onClick={() => onReply(comment.id)}
//               className="text-sm text-yellow-600 hover:text-yellow-700"
//             >
//               Reply
//             </button>
//           </div>

//           <div
//             className="mt-2 text-sm text-gray-700 prose prose-sm max-w-none"
//             dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
