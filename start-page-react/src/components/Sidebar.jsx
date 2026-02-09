export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-black/80 text-white flex flex-col items-center py-6 gap-6 z-40">
      <div className="text-xs opacity-70">TOOLS</div>
      <button className="w-10 h-10 bg-pink-500 rounded-lg" />
      <button className="w-10 h-10 bg-blue-500 rounded-lg" />
      <button className="w-10 h-10 bg-green-500 rounded-lg" />
      <button className="w-10 h-10 bg-yellow-500 rounded-lg" />
    </div>
  );
}
