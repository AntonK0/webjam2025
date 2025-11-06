interface TextBoxProps {
  placeholder_text: string;
  text: string;
  setText: (value: string) => void;
}

const TextBox = ({ placeholder_text, text, setText }: TextBoxProps) => {
  return (
    <textarea
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
      className="textarea textarea-ghost border-solid border-black border-2 w-80"
      placeholder={placeholder_text}
    ></textarea>
  );
};

export default TextBox;
