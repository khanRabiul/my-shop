import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { cn } from "@/lib/utils"; // cn ইউটিলিটি ইম্পোর্ট করুন

const Searchbar = () => {
  return (
    // সার্চ বার কন্টেইনার:
    // flex ব্যবহার করে আইকন ও ইনপুটকে পাশাপাশি রাখা হয়েছে।
    // ব্যাকগ্রাউন্ড, বর্ডার, প্যাডিং এবং রাউন্ডেড কর্ণার থিম-ভিত্তিক করা হয়েছে।
    // **w-full রাখা হয়েছে, কিন্তু max-w-* ক্লাসগুলো সরিয়ে দেওয়া হয়েছে**
    <div className="flex items-center gap-2 bg-background border border-border px-3 py-0.5 rounded-md w-full"> {/* max-w-sm md:max-w-md lg:max-w-lg সরানো হয়েছে */}
      <Input
        placeholder="Search your broducts and brands..."
        // ইনপুট ফিল্ডের স্টাইল:
        // বর্ডার সরানো হয়েছে, ব্যাকগ্রাউন্ড স্বচ্ছ করা হয়েছে যাতে কন্টেইনারের ব্যাকগ্রাউন্ড দেখা যায়।
        // ফোকাস অবস্থায় কোনো রিং বা আউটলাইন আসবে না।
        // টেক্সট এবং প্লেসহোল্ডারের রঙ থিম-ভিত্তিক করা হয়েছে।
        className={cn(
          "w-full",
          "border-none bg-transparent",
          "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none",
          "px-0 py-0", // ইনপুট ফিল্ডের অতিরিক্ত প্যাডিং সরানো হয়েছে
          "text-foreground placeholder:text-muted-foreground"
        )}
      />
      {/* সার্চ আইকন:
          রঙ থিম-ভিত্তিক 'muted-foreground' ব্যবহার করা হয়েছে।
          আকার রেসপনসিভ করা হয়েছে।
      */}
      <Search className="text-muted-foreground cursor-pointer w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
    </div>
  );
};

export default Searchbar;