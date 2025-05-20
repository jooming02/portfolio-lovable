
const FooterSection = () => {
  return (
    <footer className="py-6 px-4 md:px-6 border-t">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
