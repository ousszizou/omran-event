import { OmranLogo } from "@/assets/omran-logo";
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Button } from './ui/button';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pb-10 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo and Social Icons */}
          <div className="mx-auto lg:mx-0 flex flex-col items-center w-fit gap-12">
            <div className='w-28 h-28'>
              <OmranLogo width="100%" height="100%" />
            </div>
            <div className="flex items-center gap-4">
              <FaTwitter className="w-6 h-6" />
              <FaLinkedinIn className="w-6 h-6" />
              <FaFacebookF className="w-6 h-6" />
              <FaInstagram className="w-6 h-6" />
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:col-span-2 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-bold mb-6 text-[1.375rem] leading-[2rem]">الخدمات</h3>
              <ul className="space-y-2 text-white/75">
                <li>برامجنا</li>
                <li>الاستشارات</li>
                <li>التمويل</li>
                <li>التدريب</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-[1.375rem] leading-[2rem]">الأخبار</h3>
              <ul className="space-y-2 text-white/75">
                <li>المدونة</li>
                <li>الفعاليات</li>
                <li>الشهادات</li>
                <li>الوظائف</li>
              </ul>
            </div>
            <div className="hidden md:block">
              <h3 className="font-bold mb-6 text-[1.375rem] leading-[2rem]">تواصل</h3>
              <ul className="space-y-2 text-white/75">
                <li>اتصل بنا</li>
                <li>أسئلة شائعة</li>
                <li>الشركاء</li>
                <li>انضم إلينا</li>
                <li>ادعمنا</li>
              </ul>
            </div>
          </div>

          <div className='grid md:hidden grid-cols-2'>
            <div>
              <h3 className="font-bold mb-6 text-[1.375rem] leading-[2rem]">تواصل</h3>
              <ul className="space-y-2 text-white/75">
                <li>اتصل بنا</li>
                <li>أسئلة شائعة</li>
                <li>الشركاء</li>
                <li>انضم إلينا</li>
                <li>ادعمنا</li>
              </ul>
            </div>
            <ul className="space-y-2 text-white/75 underline">
              <li>
                <Link href="#" className="">سياسة الخصوصية</Link>
              </li>
              <li>
                <Link href="#">تعريف</Link>
              </li>
              <li>
                <Link href="#">سياسة الكوكيز</Link>
              </li>
              <li>
                <Link href="#">الشروط والأحكام</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-1 max-w-xl">
            <h3 className="font-bold mb-6 text-[1.375rem] leading-[2rem]">نحن نبقيك على اطلاع</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="الإيميل"
                className="min-w-0 px-4 h-12 bg-white text-black flex-grow rounded-tr-full rounded-br-full"
              />
              <Button className="bg-[#AD9E68] h-12 px-6 text-white rounded-tl-full rounded-bl-full">تسجيل</Button>
            </div>
          </div>
        </div>

        {/* Policy Links */}
        <div className="mt-8 pt-8 border-t border-white/40 text-white lg:grid lg:grid-cols-2 lg:gap-4 text-xs font-medium text-center lg:text-right">
          <p>© 2024<span className='text-[#AD9E68] ms-1'>فعاليات عمران</span>. جميع الحقوق محفوظة</p>
          <div className="hidden lg:flex flex-wrap justify-center md:justify-end gap-8">
            <a href="#" className="hover:underline mx-2">سياسة الخصوصية</a>
            <a href="#" className="hover:underline mx-2">تعريف</a>
            <a href="#" className="hover:underline mx-2">سياسة الكوكيز</a>
            <a href="#" className="hover:underline mx-2">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
