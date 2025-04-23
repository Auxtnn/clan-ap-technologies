// import { WordPressComment } from "@/app/types";
// import { CommentItem } from "./CommentItem";

// interface CommentListProps {
//   comments: WordPressComment[];
//   onReply: (commentId: number) => void;
//   isNested?: boolean;
// }

// export function CommentList({
//   comments,
//   onReply,
//   isNested = false,
// }: CommentListProps) {
//   return (
//     <div
//       className={`space-y-6 ${
//         isNested ? "ml-12 mt-6 border-l-2 border-gray-100 pl-6" : ""
//       }`}
//     >
//       {comments.map((comment) => (
//         <div key={comment.id}>
//           <CommentItem comment={comment} onReply={onReply} />

//           {/* Render nested replies if they exist */}
//           {comment.replies && comment.replies.length > 0 && (
//             <CommentList
//               comments={comment.replies}
//               onReply={onReply}
//               isNested={true}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
