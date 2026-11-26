import { LoaderCircle, Inbox, TriangleAlert } from "lucide-react";

export function Loader({ label = "Loading..." }) {
  return (
    <div className="flex items-center justify-center gap-2 py-10 text-sm text-slate-500" role="status">
      <LoaderCircle className="h-4 w-4 animate-spin" /> {label}
    </div>
  );
}

export function EmptyState({ message = "Nothing to show yet." }) {
  return (
    <div className="flex flex-col items-center gap-2 py-10 text-sm text-slate-500">
      <Inbox className="h-6 w-6" /> {message}
    </div>
  );
}

export function ErrorState({ message = "Something went wrong. Please try again." }) {
  return (
    <div className="flex flex-col items-center gap-2 py-10 text-sm text-red-600" role="alert">
      <TriangleAlert className="h-6 w-6" /> {message}
    </div>
  );
}