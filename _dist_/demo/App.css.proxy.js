// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0;\n  padding: 0;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n.outer-container {\n  align-items: center;\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  width: 100vw;\n}\n\n.example-set-one {\n  align-items: center;\n  background-color: rgba(223, 223, 223, 0.112);\n  border-radius: 12px;\n  box-shadow: 0 20px 50px 0 #e3e1e1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 32px;\n  width: 30%;\n}\n\n.example-set-one > *:not(:last-child) {\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n\n.second {\n  border-radius: 0;\n}\n\n.third {\n  border: 1px solid #636363;\n  border-radius: 4px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}