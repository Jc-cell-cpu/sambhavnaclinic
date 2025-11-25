import Image from "next/image"

export default function TopBanner() {
  return (
    <div className="hidden md:block text-primary-foreground py-2 px-4 text-sm"
      style={{
        background: "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <Image src="/icons/telephoneIcon.png" alt="Phone" width={16} height={16} className="invert brightness-0" />
            <span>+011 3253 4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/MailIcon.png" alt="Email" width={16} height={16} className="invert brightness-0" />
            <span>Sambhavnaclinic@gmai.com</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <Image src="/icons/globeIcon.png" alt="Website" width={16} height={16} className="invert brightness-0" />
            <span>Sambhavnaclinic.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/TimeIcon.png" alt="Time" width={16} height={16} className="invert brightness-0" />
            <span>Monday - Sunday: 08:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  )
}
