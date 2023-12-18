import React from "react";
import { LuCheck, LuX } from "react-icons/lu";
import Image from "next/image";
import { newModelType } from "@/data/new-model";
type Props = {
  newModelPuzzle: newModelType;
};

const NewModelPuzzle = ({ newModelPuzzle }: Props) => {
  return (
    <div>
      <h1 className="text-q-orange mb-4 text-xl">{newModelPuzzle.title}</h1>
      <div className="grid grid-cols-1  sm:grid-cols-2">
        {newModelPuzzle.subtitles.map((subtitle) => (
          <div
            key={subtitle}
            className="mx-auto flex flex-col items-center gap-6 md:min-h-[300px] lg:min-h-[200px] "
          >
            <div>
              {newModelPuzzle.positive ? (
                <LuCheck className="h-8 w-8 opacity-50" />
              ) : (
                <LuX className="h-8 w-8 opacity-50" />
              )}
            </div>
            <div>
              <Image
                src={"/images/others/puzzle-2-1.png"}
                alt="puzzle"
                width={50}
                height={50}
                className="object-contain object-center"
              />
            </div>
            <div className="text-q-blue px-4 text-xl sm:text-base">
              {subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewModelPuzzle;
