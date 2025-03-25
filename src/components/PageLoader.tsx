import { Spinner, Typography } from "@material-tailwind/react";

export default function FullPageLoader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100 opacity-100 transition-opacity duration-500">
      <div className="flex flex-col items-center space-y-4">
        {/* @ts-ignore */}
        <Spinner className="h-16 w-16 text-gray-900/50" />
        {/* @ts-ignore */}
        <Typography variant="h6" className="text-gray-600">
          Loading...
        </Typography>
      </div>
    </div>
  );
}
