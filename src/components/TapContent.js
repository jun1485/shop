function TabContent(props) {
  if (props.tabContent === 0) return <div>내용1</div>
  else if (props.tabContent === 1) return <div>내용2</div>
  else if (props.tabContent === 2) return <div>내용3</div>
}

export default TabContent;