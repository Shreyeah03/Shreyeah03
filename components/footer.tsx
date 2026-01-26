export function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          Designed & Built by{" "}
          <span className="text-primary hover:underline cursor-pointer">Your Name</span>
        </p>
        <p className="text-center">
          Built with{" "}
          <span className="text-primary">Next.js</span> &{" "}
          <span className="text-primary">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
