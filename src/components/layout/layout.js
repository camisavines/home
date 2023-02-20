const Layout = ({ children }) => {
  return (
    <div>
      layout
      <div className="row">
        <div className="col-0 col-md-3">navbar</div>
        <div className="col-xs-12 col-md-9">{children}</div>
      </div>
    </div>
  );
};

export { Layout };
