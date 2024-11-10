import React from 'react'

const AboutPage = () => {
  return (
      <section id="about" className="border-4 border-blue-900 border-dotted bg-gradient-to-r from-green-500 via-purple-500 to-green-500 py-4 text-center">
  <h2 className="text-3xl font-bold mb-2">About Me</h2>
  <p className="text-xl max-w-2xl mx-auto"><b>"Now I am studying in Governor Initiative Program Organized by Governor Sindh Kamran Khan Tessori"</b></p>
  <div className="grid grid-cols-2 gap-x-4 gap-y-4 py-8 ml-16">
  <div>
  <h3 className="text-left font-black text-2xl">Personal Information:</h3>
  <div className="space-y-2 text-xl">
  <div className="flex space-x-4"><b>Date of Birth:</b><span> 20-12-1990</span></div>
  <div className="flex space-x-4"><b>Age:</b><span>29 years</span></div>
  <div className="flex space-x-4"><b>Email:</b><span>sumerahashim208@gmail.com</span></div>
  <div className="flex space-x-4"><b>Contact:</b><span>03093671527</span></div>
  <div className="flex space-x-4"><b>Address:</b><span>Jahangir Town Cooperative Housing Society, Safoora Karachi</span></div>
  </div>
  </div>

  <div>
  <h3 className="text-left font-black text-2xl">Education:</h3>
  <div className="space-y-2 text-xl">
  <div className="flex space-x-4"><b>Degree:</b><span>Masters in Isl.Studies from University of Karachi</span></div>
  <div className="flex space-x-4"><b>Degree:</b><span>Beachlor in Humanities from Sir Syed College</span></div>
  <div className="flex space-x-4"><b>Certificate:</b><span>Inter in Humanities from Sir Syed College</span></div>
  <div className="flex space-x-4"><b>Certificate:</b><span>SSC in Humanities from SITE Model School</span></div>
  </div>
  </div>
  <div>
  <h3 className="text-left font-black text-2xl py-6">Experience:</h3>
  <div className="space-y-2 text-xl">
  <div className="flex space-x-4"><b>Assitant Vice Principal:</b>Bahria College Karachi (12 years)</div>
  <div className="flex space-x-4"><b>Assistant Director Operations:</b>Helix Pharma (5 years)</div>
  <div className="flex space-x-4"><b>Data Entry Operator:</b><span>Local office (1 year)</span></div>
  <div className="flex space-x-4"><b>Teaching:</b><span>Different Schools (4 years)</span></div>
  </div>
  </div>
  <div>
  <h3 className="text-left font-black text-2xl py-6">Skills:</h3>
  <div className="space-y-2 text-xl">
  <div className="flex space-x-4"><b>Typescript and Javascript</b></div>
  <div className="flex space-x-4"><b>HTML and CSS</b></div>
  <div className="flex space-x-4"><b>Next.js and React</b></div>
  <div className="flex space-x-4"><b>Adobe Photoshop</b></div>
  <div className="flex space-x-4"><b>Microsoft Office(Excel, Word, PowerPoint)</b></div>
  <div className="flex space-x-4"><b>Inpage(Urdu)</b></div>
  <div className="flex space-x-4"><b>Typing Speed (50/min)</b></div> 
  </div>
  </div>
</div>
</section>
  )
}

export default AboutPage
