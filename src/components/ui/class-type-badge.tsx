import { Volume2, Video, PlayCircle } from "lucide-react";

interface ClassTypeBadgeProps {
  type: "audio" | "live" | "recorded";
}

export default function ClassTypeBadge({ type }: ClassTypeBadgeProps) {
  const getTypeConfig = () => {
    switch (type) {
      case "audio":
        return {
          icon: Volume2,
          label: "Audio Classes",
          bgColor: "bg-red-50"
        };
      case "live":
        return {
          icon: Video,
          label: "Live Classes",
          bgColor: "bg-purple-50"
        };
      case "recorded":
        return {
          icon: PlayCircle,
          label: "Recorded Class",
          bgColor: "bg-green-50"
        };
    }
  };

  const config = getTypeConfig();
  const Icon = config.icon;

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${config.bgColor}`}>
      <Icon className="w-5 h-5" />
      <span className="font-medium">{config.label}</span>
    </div>
  );
}
