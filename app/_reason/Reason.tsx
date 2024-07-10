import Container from "@/components/Container/Container";
import VerticalLines from "@/components/VerticalLines/VerticalLines";
import ArrowRightIcon from "@/icons/ArrowRightIcon";
import Link from "next/link";
import React from "react";

const Reason = () => {
  return (
    <section className="reason">
      <VerticalLines />
      <Container>
        <h2>
          Почему стоит инвестировать в <span>Alatau SEZ</span>
        </h2>
        <div className="reason__content">
          <Link href={""}>
            <div className="invest_button">
              <button>
                <span>Инвестируй с нами</span> <ArrowRightIcon />
              </button>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Reason;
