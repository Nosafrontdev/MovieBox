function FooterPage() {
  return (  
    <footer className="bg-red-900 text-gray-400 text-center text-sm mt-6 border-t border-red-900 pt-4 pb-4">
      © {new Date().getFullYear()} MovieBox. All rights reserved.<a href='mailto:nosyblink@gmail.com' className="text-yellow-400 hover:underline"> Mail Us</a>
        </footer>
  );
}

export default FooterPage;
