import { Link, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <nav className="flex gap-4 p-4 bg-white border-b">
        {/* 'to' 속성에 라우터에 등록한 path를 적어줍니다 */}
        <Link to="/" className="text-blue-600 hover:font-bold">홈으로</Link>
        <Link to="/about" className="text-blue-600 hover:font-bold">소개(about)</Link>
      </nav>

      <main>
        {/* 이 Outlet 자리에 Home이나 About 컴포넌트가 갈아끼워집니다 */}
        <Outlet />
      </main>
    </div>
  );
}