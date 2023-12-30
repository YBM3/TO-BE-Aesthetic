import React, {
  useState,
  useEffect,
  useRef,
  createRef,
  useLayoutEffect,
  useMemo,
  useCallback,
} from "react";
import "./index.css";
import arrowDown from "../../assets/img/Vector 6.svg";

function SkinCareList({ data, isMenuOpen }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const contentRef = useRef(null);
  const [heights, setHeights] = useState([]);
  const [listHeights, setListHeights] = useState([]);

  const listRefs = useMemo(() => data.map(() => createRef()), [data]);

  const contentRefs = useMemo(
    () => data.map((section) => section.items.map(() => createRef())),
    [data]
  );

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setHeights(
        data.map((section, sectionIndex) =>
          section.items.map((_, itemIndex) =>
            contentRefs[sectionIndex][itemIndex].current
              ? contentRefs[sectionIndex][itemIndex].current.scrollHeight
              : 0
          )
        )
      );
    }, 0);

    return () => clearTimeout(timer);
  }, [contentRefs, data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setListHeights(
        data.map((_, index) =>
          listRefs[index].current ? listRefs[index].current.scrollHeight : 0
        )
      );
    }, 0);

    return () => clearTimeout(timer);
  }, [listRefs, data]);

  const handleClick = useCallback(
    (i) => {
      setExpandedItem(expandedItem === i ? null : i);
      if (contentRef.current && contentRef.current.scrollHeight) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      }
    },
    [expandedItem]
  );

  return (
    <div
      className={`services__content_menu ${
        isMenuOpen ? "menu__open" : "menu__close"
      }`}
      style={{
        maxHeight:
          expandedSection !== null
            ? `${listHeights.reduce((a, b) => a + b, 0)}px`
            : `${data.length * 78.75}px`,
      }}
    >
      {data.map((section, index) => (
        <div key={index} className="services__content_menu__item">
          <div className="services__content_menu__itemBox">
            <div
              className="services__menu__textBox"
              onClick={() => {
                setExpandedSection(expandedSection === index ? null : index);
                setExpandedItem(null);
              }}
            >
              {section.title}
              <img
                src={arrowDown}
                alt=""
                className="open"
                style={{
                  transform:
                    expandedSection === index
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  transition: "transform 0.5s ease",
                }}
              />
            </div>
            <div
              ref={listRefs[index]}
              className={`services__list ${
                expandedSection === index ? "openList" : "closeList"
              }`}
              style={{
                maxHeight:
                  expandedSection === index
                    ? `${
                        listHeights[index] + (heights[index][expandedItem] || 0)
                      }px`
                    : "0",
              }}
            >
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className={` ${
                    !item.description || item.description.length === 0
                      ? "services__list__noDescription"
                      : "services__list__itemBox"
                  }`}
                >
                  {" "}
                  <span
                    className={`services__list__itemBox__Title  ${
                      item.class === undefined ? "" : item.class
                    }`}
                    onClick={() => {
                      if (item.class !== undefined) {
                        return;
                      }
                      handleClick(i);
                    }}
                  >
                    {item.title}
                  </span>
                  {item.description && item.description.length > 0 && (
                    <div
                      ref={contentRefs[index][i]}
                      className={`services__item__text ${
                        expandedItem === i ? "openText" : "closeText"
                      }`}
                      style={{
                        maxHeight:
                          expandedItem === i ? `${heights[index][i]}px` : "0",
                      }}
                    >
                      {item.description.map((desc, j) => (
                        <p
                          className={`services__item__textBox ${desc.class}`}
                          key={j}
                        >
                          {desc.text}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkinCareList;
