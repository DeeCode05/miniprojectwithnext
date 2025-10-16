interface Feedback {
  name: string;
  comment: string;
}

export default function FeedbackList({ feedback }: { feedback: Feedback[] }) {
  return (
    <div className="space-y-4">
      {feedback.map((f, i) => (
        <div
          key={i}
          className="p-4 bg-[#1a1a1a] rounded-lg border border-gray-700"
        >
          <p className="text-sm text-gray-300 italic">“{f.comment}”</p>
          <p className="text-xs text-right text-gray-500 mt-2">- {f.name}</p>
        </div>
      ))}
    </div>
  );
}
