import inputform from "@styles/InputForm.module.css";

// icons
import LinkIcon from "@mui/icons-material/Link";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const InputForm = () => {
  return (
    <form className={inputform.input_form}>
      <LinkIcon className={inputform.icon} />
      <input type="text" placeholder="Paste the article url" />
      <button onClick={e => e.preventDefault()} type="submit">
        <SendRoundedIcon className={[inputform.icon,inputform.sendIcon]} />
      </button>
    </form>
  );
};

export default InputForm;
