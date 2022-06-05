const WIDGET_TYPE = {
  contacts: "contacts",
  calendar: "calendar",
};

const WidgetComponent = (props) => {
  const {type, size} = props;

  let text;

  if (type === WIDGET_TYPE.contacts) text = 'Contacts Widget';
  if (type === WIDGET_TYPE.calendar) text = 'Calendar Widget';

  return (
    <div onClick={() => {
      if (type === WIDGET_TYPE.contacts) text = 'You clicked on the "Contacts" widget!';
      if (type === WIDGET_TYPE.calendar) text = 'You clicked on the "Calendar" widget!';
    }}>
      <p style={{fontSize: size}}>{text}</p>
    </div>
  )
};

const calculateNumberOfWidgetToDisplayOnPage = (n) => {
  let result = 0;

  if (n <= 2) {
    return n - 1;
  }

  result = calculateNumberOfWidgetToDisplayOnPage(n - 1) + calculateNumberOfWidgetToDisplayOnPage(n - 2);

  return result
};

const App = () => {
  const [number, setNumber] = useState();

  useEffect(() => {
    const calculatedNumber = calculateNumberOfWidgetToDisplayOnPage(30);

    setNumber(calculatedNumber);
  })

  return [...Array(number)].map(() => (
    <>
      <WidgetComponent type={WIDGET_TYPE.contacts} size={12}/>
      <WidgetComponent type={WIDGET_TYPE.calendar} size={14}/>
    </>
  ));
};
