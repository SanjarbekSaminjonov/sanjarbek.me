export const dateFormat = (datetime: string) => {
  const dt = datetime.split("T")
  return {
    date: dt[0],
    time: dt[1]
  }
}