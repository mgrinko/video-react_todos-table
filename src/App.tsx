import { todos } from './data/todos';
import { TodoTable } from './components/TodoTable';
import { Link, Route, Routes } from 'react-router-dom';

export const App = () => {
  return <>
    <nav className="navbar is-light px-3">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src="/logo.svg" alt="MA" className="logo" />
        </Link>

        <Link to="/" className="navbar-item">Home</Link>
        <Link to="todos" className="navbar-item">Todos</Link>
      </div>
    </nav>

    <div className="section">
      <Routes>
        <Route path="*" element={<p>Page not found</p>} />

        <Route path="/" element={
          <h1 className="title">Home Page</h1>
        } />

        <Route path="todos" element={<>
          <h1 className="title">Todos Page</h1>

          <TodoTable
            todos={todos}
            selectedTodoId={3}
          />
        </>} />
      </Routes>
    </div>
  </>;
};
