/*eslint-disable*/

import CustomButton from "./CustomButton";

function AIPicker({ prompt, setPrompt, generatingImg, handleSubmit }) {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Try 'vector art of a flexing bicep with electricity emananting from it, digital art, tshirt design'"
        className="aipicker-textarea"
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI.."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
            <CustomButton />
          </>
        )}
      </div>
    </div>
  );
}

export default AIPicker;
