const FooterSection = () => {
  return (
    <footer className="py-6 px-4 md:px-6 border-t">
      <div className="max-w-7xl mx-auto text-center space-y-1">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Last updated: 22/5/2025
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
