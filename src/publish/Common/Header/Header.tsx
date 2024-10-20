export interface HeaderProps {
  btn_back?: boolean;
  title?: string;
  setting?: boolean; // setting 버튼 표시 여부
  bell?: boolean; // bell 버튼 표시 여부
  isBellActive?: boolean; // bell 버튼 활성화 여부
  profile?: boolean; // profile 버튼 표시 여부
}

export const Header = ({
  btn_back,
  title,
  setting,
  bell,
  isBellActive,
  profile,

  ...props
}: HeaderProps) => (
  <>
    <header className={"flex items-center p-4"} {...props}>
      <button className={btn_back ? "btn_back" : "btn_back_white"}></button>
      <h2>{title}</h2>
      <div className="flex items-center gap-4 right">
        {setting && <button className="btn_setting"></button>}{" "}
        {bell && (
          <button
            className={isBellActive ? "btn_bell_active" : "btn_bell"}
          ></button>
        )}{" "}
        {profile && <button className="btn_profile"></button>}{" "}
      </div>
    </header>
  </>
);
