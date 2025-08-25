import Image from "next/image";
import { Calendar, Clock, MapPin, User, ExternalLink } from "lucide-react";

const courses = [
  {
    title: "The Sustainability Toolkit Empowering Businesses for Positive Change Slot 1",
    image: "https://cdn-nexlink.s3.us-east-2.amazonaws.com/123(1)_7a2908df-d06f-4b71-9bc1-73f60919dad1.jpg",
    date: "29 Sep - 1 Oct",
    time: "5:00 PM - 8:00 PM",
    location: "Online",
    duration: "3 days • 9h",
    status: "Upcoming",
    tag: "ESG",
    startDate: "2025-09-29",
    endDate: "2025-10-01",
    startDay: "Monday",
    endDay: "Wednesday",
    format: "Online",
    schedule: "Schedule AR-ENG"
  },
  {
    title: "The Sustainability Toolkit Empowering Businesses for Positive Change Slot 2",
    image: "https://cdn-nexlink.s3.us-east-2.amazonaws.com/123(1)_7a2908df-d06f-4b71-9bc1-73f60919dad1.jpg",
    date: "28-29 Oct",
    time: "5:00 PM - 10:00 PM",
    location: "Online",
    duration: "2 days • 10h",
    status: "Upcoming",
    tag: "ESG",
    startDate: "2025-10-28",
    endDate: "2025-10-29",
    startDay: "Tuesday",
    endDay: "Wednesday",
    format: "Online",
    schedule: "Schedule AR-ENG"
  },
  {
    title: "The Sustainability Toolkit Empowering Businesses for Positive Change Slot 3",
    image: "https://cdn-nexlink.s3.us-east-2.amazonaws.com/123(1)_7a2908df-d06f-4b71-9bc1-73f60919dad1.jpg",
    date: "24-25 Nov",
    time: "5:00 PM - 10:00 PM",
    location: "Online",
    duration: "2 days • 10h",
    status: "Upcoming",
    tag: "ESG",
    startDate: "2025-11-24",
    endDate: "2025-11-24",
    startDay: "Monday",
    endDay: "Monday",
    format: "Online",
    schedule: "Schedule AR-ENG"
  }
];

export default function ESGCourseCatalogueSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              Featured Courses
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              ESG Course Catalogue
            </h2>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              View all courses <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Tag */}
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-2 py-1 bg-green-500 text-white text-xs font-medium rounded">
                    {course.tag}
                  </span>
                </div>
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {course.title}
                  </h3>
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6 space-y-4">
                {/* Course Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">{course.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">{course.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">{course.location}</span>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="text-xs text-gray-500 space-y-1">
                  <div>Start: {course.startDay}, {course.startDate}</div>
                  <div>End: {course.endDay}, {course.endDate}</div>
                  <div>Format: {course.format}</div>
                  <div>Schedule: {course.schedule}</div>
                </div>

                {/* Duration and Status */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{course.duration}</span>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {course.status}
                  </span>
                </div>

                {/* Register Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
