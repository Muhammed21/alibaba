import React from "react";
import Image from 'next/image';

const StarsReview = ({ numberOfStars }: { numberOfStars: number }) => {
  const numberOfEmptyStars = 5 - numberOfStars;
  return (
    <div className="flex items-center gap-3">
      {[...Array(numberOfStars)].map((_, index) => (
        <Image
          key={index}
          alt="starFilled"
          width={28}
          height={28}
          src="/_img/_svg/starFilled.svg"
        />
      ))}

      {[...Array(numberOfEmptyStars)].map((_, index) => (
        <Image
          key={index}
          alt="starEmpty"
          width={28}
          height={28}
          src="/_img/_svg/starEmpty.svg"
        />
      ))}
    </div>
  );
};

export default StarsReview;
