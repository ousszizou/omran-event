import { OmranLogo } from "@/assets/omran-logo";
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
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
              <Link href="https://x.com/omranplatform" target="_blank" rel="noreferrer">
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/omranplatform" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="w-6 h-6" />
              </Link>
              <Link href="https://web.facebook.com/omranplatform" target="_blank" rel="noreferrer">
                <FaFacebookF className="w-6 h-6" />
              </Link>
              <Link href="https://www.instagram.com/omranplatform" target="_blank" rel="noreferrer">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="https://www.youtube.com/omranplatform" target="_blank" rel="noreferrer">
                <FaYoutube className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:col-span-2 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-bold mb-6 text-[1.375rem] leading-[2rem]">الخدمات</h3>
              <ul className="space-y-2 text-white/75">
                <li>
                  <Link href="https://omran.org/ar" target="_blank" rel="noreferrer">برامجنا</Link>
                </li>
                <li>
                  <Link href="https://omran.org/ar" target="_blank" rel="noreferrer">الاستشارات</Link>
                </li>
                <li>
                  <Link href="https://omran.org/ar" target="_blank" rel="noreferrer">التمويل</Link>
                </li>
                <li>
                  <Link href="https://omran.org/ar" target="_blank" rel="noreferrer">التدريب</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-[1.375rem] leading-[2rem]">الأخبار</h3>
              <ul className="space-y-2 text-white/75">
                <li>
                  <Link href="https://omran.org/ar/modawana" target="_blank" rel="noreferrer">المدونة</Link>
                </li>
                <li>
                  <Link href="https://events.omran.org" target="_blank" rel="noreferrer">الفعاليات</Link>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <h3 className="font-bold mb-6 text-[1.375rem] leading-[2rem]">تواصل</h3>
              <ul className="space-y-2 text-white/75">
                <li>
                  <Link href="https://omran.org/ar/%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9%D9%86%D8%A7" target="_blank" rel="noreferrer">اتصل بنا</Link>
                </li>
                <li>
                  <Link href="https://omran.org/ar/join_us" target="_blank" rel="noreferrer">انضم إلينا</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='grid md:hidden grid-cols-2'>
            <div>
              <h3 className="font-bold mb-6 text-[1.375rem] leading-[2rem]">تواصل</h3>
              <ul className="space-y-2 text-white/75">
                <li>
                  <Link href="https://omran.org/ar/%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9%D9%86%D8%A7" target="_blank" rel="noreferrer">اتصل بنا</Link>
                </li>
                <li>
                  <Link href="https://omran.org/ar/join_us" target="_blank" rel="noreferrer">انضم إلينا</Link>
                </li>
              </ul>
            </div>
            <ul className="space-y-2 text-white/75 underline">
              <li>
                <Link href="https://omran.org/ar/privacy-policy" target="_blank" rel="noreferrer">سياسة الخصوصية</Link>
              </li>
              <li>
                <Link href="#">تعريف</Link>
              </li>
              <li>
                <Link href="https://omran.org/ar/agreement" target="_blank" rel="noreferrer">الشروط والأحكام</Link>
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
            <Link href="https://omran.org/ar/privacy-policy" target="_blank" rel="noreferrer" className="hover:underline mx-2">سياسة الخصوصية</Link>
            <Link href="#" className="hover:underline mx-2">تعريف</Link>
            <Link href="https://omran.org/ar/agreement" target="_blank" rel="noreferrer" className="hover:underline mx-2">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
