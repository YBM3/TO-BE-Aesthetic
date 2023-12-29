import React, {
  useState,
  useEffect,
  useRef,
  createRef,
  useLayoutEffect,
} from "react";
import "./index.css";
import arrowDown from "../../assets/img/Vector 6.svg";
import SpaProceduresData from "../../Data/services/SpaProceduresData.json";

function SpaProceduresList({ isMenuOpen }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const contentRef = useRef(null);
  const [heights, setHeights] = useState([]);
  const [listHeights, setListHeights] = useState([]);

  const listRefs = SpaProceduresData.map(() => createRef());

  const contentRefs = SpaProceduresData.map((section) =>
    section.items.map(() => createRef())
  );
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setHeights(
        SpaProceduresData.map((section, sectionIndex) =>
          section.items.map((_, itemIndex) =>
            contentRefs[sectionIndex][itemIndex].current
              ? contentRefs[sectionIndex][itemIndex].current.scrollHeight
              : 0
          )
        )
      );
    }, 0);

    return () => clearTimeout(timer);
  }, [SpaProceduresData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setListHeights(
        SpaProceduresData.map((_, index) =>
          listRefs[index].current ? listRefs[index].current.scrollHeight : 0
        )
      );
    }, 0);

    return () => clearTimeout(timer);
  }, [SpaProceduresData]);

  useEffect(() => {
    setListHeights(
      SpaProceduresData.map((_, index) =>
        listRefs[index].current ? listRefs[index].current.scrollHeight : 0
      )
    );
  }, [SpaProceduresData]);

  const handleClick = (i) => {
    setExpandedItem(expandedItem === i ? null : i);
    if (contentRef.current && contentRef.current.scrollHeight) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    }
  };

  return (
    <div
      className={`services__content_menu ${
        isMenuOpen ? "menu__open" : "menu__close"
      }`}
      style={{
        maxHeight:
          expandedSection !== null
            ? `${listHeights.reduce((a, b) => a + b, 0)}px`
            : "197px",
      }}
    >
      {SpaProceduresData.map((section, index) => (
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
              <img src={arrowDown} alt="" className="open" />
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

export default SpaProceduresList;
