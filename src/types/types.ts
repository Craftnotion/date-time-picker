export type DateTimePickerProps = {
  /**
   * `aria-label` for the AM/PM select input.
   *
   * @example 'Select AM/PM'
   */
  amPmAriaLabel?: string
  /**
   * Automatically focuses the input on mount.
   *
   * @example true
   */
  autoFocus?: boolean
  /**
   * `aria-label` for the calendar button.
   *
   * @example 'Toggle calendar'
   */
  calendarAriaLabel?: string
  /**
   * Class name(s) that will be added along with `"react-calendar"` to the main React-Calendar `<div>` element.
   *
   * @example 'class1 class2'
   * @example ['class1', 'class2 class3']
   */
  calendarClassName?: ClassName
  /**
   * Content of the calendar button. Setting the value explicitly to `null` will hide the icon.
   *
   * @example 'Calendar'
   * @example <CalendarIcon />
   * @example CalendarIcon
   */
  calendarIcon?: IconOrRenderFunction | null
  /**
   * Class name(s) that will be added along with `"react-datetime-picker"` to the main React-DateTime-Picker `<div>` element.
   *
   * @example 'class1 class2'
   * @example ['class1', 'class2 class3']
   */
  className?: ClassName
  /**
   * `aria-label` for the clear button.
   *
   * @example 'Clear value'
   */
  clearAriaLabel?: string
  /**
   * Content of the clear button. Setting the value explicitly to `null` will hide the icon.
   *
   * @example 'Clear'
   * @example <ClearIcon />
   * @example ClearIcon
   */
  clearIcon?: IconOrRenderFunction | null
  /**
   * Class name(s) that will be added along with `"react-clock"` to the main React-Calendar `<div>` element.
   *
   * @example 'class1 class2'
   * @example ['class1', 'class2 class3']
   */
  clockClassName?: ClassName
  /**
   * Whether to close the widgets on value selection. **Note**: It's recommended to use `shouldCloseWidgets` function instead.
   *
   * @default true
   * @example false
   */
  closeWidgets?: boolean
  /**
   * `data-testid` attribute for the main React-DateTime-Picker `<div>` element.
   *
   * @example 'datetime-picker'
   */
  'data-testid'?: string
  /**
   * `aria-label` for the day input.
   *
   * @example 'Day'
   */
  dayAriaLabel?: string
  /**
   * `placeholder` for the day input.
   *
   * @default '--'
   * @example 'dd'
   */
  dayPlaceholder?: string
  /**
   * When set to `true`, will remove the calendar and the button toggling its visibility.
   *
   * @default false
   * @example true
   */
  disableCalendar?: boolean
  /**
   * When set to `true`, will remove the clock.
   *
   * @default false
   * @example true
   */
  disableClock?: boolean
  /**
   * Whether the date time picker should be disabled.
   *
   * @default false
   * @example true
   */
  disabled?: boolean
  /**
   * Input format based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). Supported values are: `y`, `M`, `MM`, `MMM`, `MMMM`, `d`, `dd`, `H`, `HH`, `h`, `hh`, `m`, `mm`, `s`, `ss`, `a`.
   *
   * **Note**: When using SSR, setting this prop may help resolving hydration errors caused by locale mismatch between server and client.
   *
   * @example 'y-MM-dd h:mm:ss a'
   */
  format?: string
  /**
   * `aria-label` for the hour input.
   *
   * @example 'Hour'
   */
  hourAriaLabel?: string
  /**
   * `placeholder` for the hour input.
   *
   * @default '--'
   * @example 'hh'
   */
  hourPlaceholder?: string
  /**
   * `id` attribute for the main React-DateTime-Picker `<div>` element.
   *
   * @example 'datetime-picker'
   */
  id?: string
  /**
   * Whether the calendar should be opened.
   *
   * @default false
   * @example true
   */
  isCalendarOpen?: boolean
  /**
   * Whether the clock should be opened.
   *
   * @default false
   * @example true
   */
  isClockOpen?: boolean
  /**
   * Locale that should be used by the datetime picker and the calendar. Can be any [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag).
   *
   * **Note**: When using SSR, setting this prop may help resolving hydration errors caused by locale mismatch between server and client.
   *
   * @example 'hu-HU'
   */
  locale?: string
  /**
   * Maximum date that the user can select. Periods partially overlapped by maxDate will also be selectable, although React-DateTime-Picker will ensure that no later date is selected.
   *
   * @example new Date()
   */
  maxDate?: Date
  /**
   * The most detailed calendar view that the user shall see. View defined here also becomes the one on which clicking an item in the calendar will select a date and pass it to onChange. Can be `"hour"`, `"minute"` or `"second"`.
   *
   * Don't need hour picking? Try [React-Date-Picker](https://github.com/wojtekmaj/react-date-picker)!
   *
   * @default 'minute'
   * @example 'second'
   */
  maxDetail?: Detail
  /**
   * Minimum date that the user can select. Periods partially overlapped by minDate will also be selectable, although React-DateTimeRange-Picker will ensure that no earlier date is selected.
   *
   * @example new Date()
   */
  minDate?: Date
  /**
   * `aria-label` for the minute input.
   *
   * @example 'Minute'
   */
  minuteAriaLabel?: string
  /**
   * `placeholder` for the minute input.
   *
   * @default '--'
   * @example 'mm'
   */
  minutePlaceholder?: string
  /**
   * `aria-label` for the month input.
   *
   * @example 'Month'
   */
  monthAriaLabel?: string
  /**
   * `placeholder` for the month input.
   *
   * @default '--'
   * @example 'mm'
   */
  monthPlaceholder?: string
  /**
   * Input name.
   *
   * @default 'datetime'
   */
  name?: string
  /**
   * `aria-label` for the native datetime input.
   *
   * @example 'Date'
   */
  nativeInputAriaLabel?: string
  /**
   * Function called when the calendar closes.
   *
   * @example () => alert('Calendar closed')
   */
  onCalendarClose?: () => void
  /**
   * Function called when the calendar opens.
   *
   * @example () => alert('Calendar opened')
   */
  onCalendarOpen?: () => void
  /**
   * Function called when the user picks a valid datetime. If any of the fields were excluded using custom `format`, `new Date(y, 0, 1, 0, 0, 0)`, where `y` is the current year, is going to serve as a "base".
   *
   * @example (value) => alert('New date is: ', value)
   */
  onChange?: (value: Value) => void
  /**
   * Function called when the clock closes.
   *
   * @example () => alert('Clock closed')
   */
  onClockClose?: () => void
  /**
   * Function called when the clock opens.
   *
   * @example () => alert('Clock opened')
   */
  onClockOpen?: () => void
  /**
   * Function called when the user focuses an input.
   *
   * @example (event) => alert('Focused input: ', event.target.name)
   */
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void
  /**
   * Function called when the user picks an invalid datetime.
   *
   * @example () => alert('Invalid datetime');
   */
  onInvalidChange?: () => void
  /**
   * Whether to open the widgets on input focus.
   *
   * **Note**: It's recommended to use `shouldOpenWidgets` function instead.
   *
   * @default true
   * @example false
   */
  openWidgetsOnFocus?: boolean
  /**
   * Element to render the widgets in using portal.
   *
   * @example document.getElementById('my-div')
   */
  portalContainer?: HTMLElement | null
  /**
   * Whether datetime input should be required.
   *
   * @default false
   * @example true
   */
  required?: boolean
  /**
   * `aria-label` for the second input.
   *
   * @example 'Second'
   */
  secondAriaLabel?: string
  /**
   * `placeholder` for the second input.
   *
   * @default '--'
   * @example 'ss'
   */
  secondPlaceholder?: string
  /**
   * Function called before the widgets close. `reason` can be `"buttonClick"`, `"escape"`, `"outsideAction"`, or `"select"`. `widget` can be `"calendar"` or `"clock"`. If it returns `false`, the widget will not close.
   *
   * @example ({ reason, widget }) => reason !== 'outsideAction' && widget === 'calendar'`
   */
  shouldCloseWidgets?: (props: { reason: CloseReason; widget: 'calendar' | 'clock' }) => boolean
  /**
   * Function called before the widgets open. `reason` can be `"buttonClick"` or `"focus"`. `widget` can be `"calendar"` or `"clock"`. If it returns `false`, the widget will not open.
   *
   * @example ({ reason, widget }) => reason !== 'focus' && widget === 'calendar'`
   */
  shouldOpenWidgets?: (props: { reason: OpenReason; widget: 'calendar' | 'clock' }) => boolean
  /**
   * Whether leading zeros should be rendered in datetime inputs.
   *
   * @default false
   * @example true
   */
  showLeadingZeros?: boolean
  /**
   * Input value. Note that if you pass an array of values, only first value will be fully utilized.
   *
   * @example new Date(2017, 0, 1, 22, 15)
   * @example [new Date(2017, 0, 1, 22, 15), new Date(2017, 0, 1, 23, 45)]
   * @example ["2017-01-01T22:15:00", "2017-01-01T23:45:00"]
   */
  value?: LooseValue
  /**
   * `aria-label` for the year input.
   *
   * @example 'Year'
   */
  yearAriaLabel?: string
  /**
   * `placeholder` for the year input.
   *
   * @default '----'
   * @example 'yyyy'
   */
  yearPlaceholder?: string
}

export type ClassName = string | null | undefined | (string | null | undefined)[]
export type CloseReason = 'buttonClick' | 'escape' | 'outsideAction' | 'select'
export type OpenReason = 'buttonClick' | 'focus'
export type Detail = 'hour' | 'minute' | 'second'
type Icon = React.ReactElement | ReactNodeArray | null | string | number | boolean
import type { ReactNodeArray } from 'prop-types'

type IconOrRenderFunction = Icon | React.ComponentType | React.ReactElement
export type LooseValuePiece = string | Date | null
export type Range<T> = [T, T]

export type LooseValue = LooseValuePiece | Range<LooseValuePiece>
export type Value = Date | null
