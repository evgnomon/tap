interface ContentProps {
  children?: React.ReactNode;
}

function Content({ children }: ContentProps) {
  return <main className="flex-1">{children}</main>;
}

export default Content;
