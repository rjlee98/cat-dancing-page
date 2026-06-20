function Layout({ children }) {
  return (
    <div className="page">
      <header className="page-header">
        <h1>🐱 춤추는 고양이</h1>
        <p>버튼을 눌러서 고양이의 춤을 시작하거나 멈춰보세요</p>
      </header>
      <main className="page-main">{children}</main>
      <footer className="page-footer">
        <p>Made with React &amp; CSS Animation</p>
      </footer>
    </div>
  )
}

export default Layout
