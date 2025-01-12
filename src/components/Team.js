import React from 'react';

const Team = () => {
  const team = [
    {
      name: "John Smith",
      role: "Designation here",
      image: "/images/john.png",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida massa amet vestibulum in in suspendisse consectetur. Amet adipiscing sagittis sem libero sit fames tristique habitant. Molestie urna nulla dictumst diam habitasse. Vel in aliquet egestas tincidunt. Risus amet nisi bibendum mattis. Adipiscing amet in viverra vestibulum."
    },
    // Add more team members here
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Team</h2>
      <p className="text-[#3E424A] mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      
      <div className="space-y-4">
        {team.map((member, index) => (
          <div key={index} className="bg-[#E8F4FD] rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="text-center md:w-48">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-lg mx-auto mb-2"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
              <p className="text-[#3E424A] leading-7">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team; 