"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ThumbsUp, Reply } from "lucide-react";

interface User {
  name: string;
  avatar: string;
}

interface Reply {
  id: number;
  user: User;
  content: string;
  date: string;
  likes: number;
}

interface Comment {
  id: number;
  user: User;
  content: string;
  date: string;
  likes: number;
  replies: Reply[];
}

interface CommentSectionProps {
  comments: Comment[];
}

export default function CommentSection({ comments }: CommentSectionProps) {
  const [commentText, setCommentText] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");
  const [localComments, setLocalComments] = useState<Comment[]>(comments);

  const handleCommentSubmit = () => {
    if (!commentText.trim()) return;

    // 模拟添加新评论
    const newComment: Comment = {
      id: Math.max(0, ...localComments.map((c) => c.id)) + 1,
      user: {
        name: "访客用户", // 实际应用中应该使用登录用户信息
        avatar: "https://www.pexels.com/zh-cn/photo/7149205/download/?w=300&h=300",
      },
      content: commentText,
      date: new Date().toISOString().split("T")[0],
      likes: 0,
      replies: [],
    };

    setLocalComments([...localComments, newComment]);
    setCommentText("");
  };

  const handleReplySubmit = (commentId: number) => {
    if (!replyText.trim()) return;

    // 模拟添加新回复
    const updatedComments = localComments.map((comment) => {
      if (comment.id === commentId) {
        const newReply: Reply = {
          id: Math.max(0, ...comment.replies.map((r) => r.id)) + 1,
          user: {
            name: "访客用户", // 实际应用中应该使用登录用户信息
            avatar: "https://www.pexels.com/zh-cn/photo/7149205/download/?w=300&h=300",
          },
          content: replyText,
          date: new Date().toISOString().split("T")[0],
          likes: 0,
        };
        return {
          ...comment,
          replies: [...comment.replies, newReply],
        };
      }
      return comment;
    });

    setLocalComments(updatedComments);
    setReplyText("");
    setReplyingTo(null);
  };

  const handleLike = (commentId: number, replyId?: number) => {
    // 模拟点赞功能
    const updatedComments = localComments.map((comment) => {
      if (replyId && comment.id === commentId) {
        const updatedReplies = comment.replies.map((reply) => {
          if (reply.id === replyId) {
            return { ...reply, likes: reply.likes + 1 };
          }
          return reply;
        });
        return { ...comment, replies: updatedReplies };
      } else if (!replyId && comment.id === commentId) {
        return { ...comment, likes: comment.likes + 1 };
      }
      return comment;
    });

    setLocalComments(updatedComments);
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">评论 ({localComments.length})</h2>

      {/* 评论输入框 */}
      <div className="mb-8">
        <Textarea
          placeholder="写下你的评论..."
          className="mb-4 min-h-[100px]"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <div className="flex justify-end">
          <Button onClick={handleCommentSubmit}>发表评论</Button>
        </div>
      </div>

      {/* 评论列表 */}
      <div className="space-y-6">
        {localComments.map((comment) => (
          <div key={comment.id} className="border rounded-lg p-4">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium">{comment.user.name}</div>
                  <div className="text-sm text-muted-foreground">{comment.date}</div>
                </div>
                <p className="mb-4">{comment.content}</p>
                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-muted-foreground"
                    onClick={() => handleLike(comment.id)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{comment.likes}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-muted-foreground"
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                  >
                    <Reply className="h-4 w-4" />
                    <span>回复</span>
                  </Button>
                </div>

                {/* 回复输入框 */}
                {replyingTo === comment.id && (
                  <div className="mt-4">
                    <Textarea
                      placeholder={`回复 ${comment.user.name}...`}
                      className="mb-2 min-h-[80px]"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setReplyingTo(null)}
                      >
                        取消
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleReplySubmit(comment.id)}
                      >
                        回复
                      </Button>
                    </div>
                  </div>
                )}

                {/* 回复列表 */}
                {comment.replies.length > 0 && (
                  <div className="mt-4 space-y-4">
                    <Separator />
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="mt-4 pl-4 border-l-2">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={reply.user.avatar} alt={reply.user.name} />
                            <AvatarFallback>{reply.user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-2">
                              <div className="font-medium">{reply.user.name}</div>
                              <div className="text-sm text-muted-foreground">{reply.date}</div>
                            </div>
                            <p className="mb-2">{reply.content}</p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="gap-1 text-muted-foreground"
                              onClick={() => handleLike(comment.id, reply.id)}
                            >
                              <ThumbsUp className="h-4 w-4" />
                              <span>{reply.likes}</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}