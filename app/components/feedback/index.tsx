export default function Feedback() {
    return (
      <section className="w-full border border-black p-14 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="flex flex-col max-w-xl mt-8 mb-8">
          <h2 className="text-[50px] font-bold text-black">Give us feedback</h2>
          <p className="text-black text-[15px] mt-2">
            Hi! We&apos;d love to hear from you. You can tell us anything about our room
            collection.
          </p>
        </div>
  
        {/* Right Form */}
        <form className="flex flex-col lg:flex-row items-center gap-5 w-full max-w-[800px]">
          <textarea
            placeholder="Share your feedback..."
            className="flex-1 min-h-[60px] border-[1px] border-black rounded-lg px-4 py-7 text-gray-700 resize-none focus:outline-none focus:ring-[0.5px] focus:ring-black"
          />
          <button
            type="submit"
            className="bg-black text-white rounded-xl px-15 py-[40.3px] font-medium hover:bg-gray-800 transition"
          >
            Send feedback
          </button>
        </form>
      </section>
    );
  }
  