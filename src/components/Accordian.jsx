import React, { useState } from 'react';

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[50%] m-10">
      <div className="border rounded-md overflow-hidden">
        <div className="accordion-item border-b border-gray-400 ">
          <div
            className="accordion-header bg-[#e8eee7] p-3.5 cursor-pointer flex justify-between items-center flex-row font-semibold  "
            onClick={() => handleToggle(1)}
          >
            Do you offer freelancers?
            <span className='text-xl font-bold'>{openIndex === 1 ? '-' : '+'}</span>
          </div>
          {openIndex === 1 && (
            <div className="accordion-body p-3.5 bg-[#e8eee7] ">
              Yes, we offer freelancers for various tasks and projects.
            </div>
          )}
        </div>

        <div className="accordion-item border-b border-gray-400 ">
          <div
            className="accordion-header bg-[#e8eee7] p-3.5 cursor-pointer flex justify-between items-center flex-row font-semibold "
            onClick={() => handleToggle(2)}
          >
            What’s the guarantee that I will be satisfied with the hired talent?
            <span className='text-xl font-bold'>{openIndex === 2 ? '-' : '+'}</span>
          </div>
          {openIndex === 2 && (
            <div className="accordion-body p-3.5 bg-[#e8eee7] ">
              We strive to match you with highly skilled talent, and we provide support to ensure satisfaction.
            </div>
          )}
        </div>

        <div className="accordion-item border-b border-gray-400 ">
          <div
            className="accordion-header bg-[#e8eee7] p-3.5 cursor-pointer flex justify-between items-center flex-row font-semibold "
            onClick={() => handleToggle(3)}
          >
            Can I hire multiple talents at once?
            <span className='text-xl font-bold'>{openIndex === 3 ? '-' : '+'}</span>
          </div>
          {openIndex === 3 && (
            <div className="accordion-body p-3.5 bg-[#e8eee7] ">
            If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.            </div>
          )}
        </div>

        <div className="accordion-item border-b border-gray-400">
          <div
            className="accordion-header bg-[#e8eee7] p-3.5 cursor-pointer flex justify-between items-center flex-row font-semibold "
            onClick={() => handleToggle(4)}
          >
            Why should I not go to an agency directly?
            <span className='text-xl font-bold'>{openIndex === 4 ? '-' : '+'}</span>
          </div>
          {openIndex === 4 && (
            <div className="accordion-body p-3.5 bg-[#e8eee7] ">
              Directly hiring freelancers offers flexibility, cost-effectiveness, and access to diverse talent pools.
            </div>
          )}
        </div>

        <div className="accordion-item ">
          <div
            className="accordion-header bg-[#e8eee7] p-3.5 cursor-pointer flex justify-between items-center flex-row font-semibold"
            onClick={() => handleToggle(5)}
          >
            Who can help me pick a right skillset and duration for me?
            <span className='text-xl font-bold'>{openIndex === 5 ? '-' : '+'}</span>
          </div>
          {openIndex === 5 && (
            <div className="accordion-body p-3.5 bg-[#e8eee7] ">
              Our platform provides guidance and resources to help you choose the appropriate skills and project duration.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
