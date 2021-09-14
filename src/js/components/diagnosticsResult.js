import smoothScroll from './smoothScroll';

const problems = [
  {
    problemId: 1,
    problemName: 'Не включается',
    problemSolutions: [
      {
        whatToRepair: 'Замена кнопки',
        workPrice: '1 200',
        sparePartPrice: '3500',
        probability: 86,
      },
      {
        whatToRepair: 'Замена Фильтра',
        workPrice: '2 200',
        sparePartPrice: '2500',
        probability: 51,
      },
      {
        whatToRepair: 'Замена Фильтра',
        workPrice: '5 200',
        sparePartPrice: '5500',
        probability: 51,
      },
    ],
  },
  {
    problemId: 2,
    problemName: ' Не выключается',
    problemSolutions: [
      {
        whatToRepair: 'Замена кнопки',
        workPrice: '1 200',
        sparePartPrice: '3500',
        probability: 50,
      },
      {
        whatToRepair: 'Замена кнопки',
        workPrice: '2 200',
        sparePartPrice: '2500',
        probability: 45,
      },
      {
        whatToRepair: 'Замена кнопки',
        workPrice: '5 200',
        sparePartPrice: '5500',
        probability: 80,
      },
    ],
  },
  {
    problemId: 3,
    problemName: 'Не нагревает воду',
    problemSolutions: [
      {
        whatToRepair: 'Замена нагревателя',
        workPrice: '1 200',
        sparePartPrice: '3500',
        probability: 35,
      },
      {
        whatToRepair: 'Замена нагревателя',
        workPrice: '2 200',
        sparePartPrice: '2500',
        probability: 86,
      },
      {
        whatToRepair: 'Замена нагревателя',
        workPrice: '5 200',
        sparePartPrice: '5500',
        probability: 23,
      },
    ],
  },
  {
    problemId: 4,
    problemName: 'Все работает, но мне скучно и я хочу пообщаться с мастером',
    problemSolutions: [
      {
        whatToRepair: 'Замена Фильтра',
        workPrice: '1 200',
        sparePartPrice: '3500',
        probability: 58,
      },
      {
        whatToRepair: 'Замена Фильтра',
        workPrice: '2 200',
        sparePartPrice: '2500',
        probability: 30,
      },
      {
        whatToRepair: 'Замена Фильтра',
        workPrice: '5 200',
        sparePartPrice: '5500',
        probability: 90,
      },
    ],
  },
  {
    problemId: 5,
    problemName: 'Не крутится барабан',
    problemSolutions: [
      {
        whatToRepair: 'Замена кнопки',
        workPrice: '1 200',
        sparePartPrice: '3500',
        probability: 11,
      },
      {
        whatToRepair: 'Замена кнопки',
        workPrice: '2 200',
        sparePartPrice: '2500',
        probability: 38,
      },
      {
        whatToRepair: 'Замена кнопки',
        workPrice: '5 200',
        sparePartPrice: '5500',
        probability: 60,
      },
    ],
  },
  {
    problemId: 6,
    problemName: 'Не работает кнопка включения',
    problemSolutions: [
      {
        whatToRepair: 'Замена нагревателя',
        workPrice: '1 200',
        sparePartPrice: '3500',
        probability: 32,
      },
      {
        whatToRepair: 'Замена нагревателя',
        workPrice: '2 200',
        sparePartPrice: '2500',
        probability: 75,
      },
      {
        whatToRepair: 'Замена нагревателя',
        workPrice: '5 200',
        sparePartPrice: '5500',
        probability: 45,
      },
    ],
  },
  {
    problemId: 7,
    problemName: 'Не выключается',
    problemSolutions: [
      {
        whatToRepair: 'Замена Фильтра',
        workPrice: '1 200',
        sparePartPrice: '3500',
        probability: 48,
      },
      {
        whatToRepair: 'Замена Фильтра',
        workPrice: '2 200',
        sparePartPrice: '2500',
        probability: 29,
      },
      {
        whatToRepair: 'Замена Фильтра',
        workPrice: '5 200',
        sparePartPrice: '5500',
        probability: 73,
      },
    ],
  },
  {
    problemId: 8,
    problemName: 'Иная проблема',
    problemSolutions: [
      {
        whatToRepair: 'Замена кнопки',
        workPrice: '1 200',
        sparePartPrice: '3500',
        probability: 25,
      },
      {
        whatToRepair: 'фЗамена кнопки',
        workPrice: '2 200',
        sparePartPrice: '2500',
        probability: 52,
      },
      {
        whatToRepair: 'ыЗамена кнопки',
        workPrice: '5 200',
        sparePartPrice: '5500',
        probability: 70,
      },
    ],
  },
  {
    problemId: 9,
    problemName: 'Не крутится барабан',
    problemSolutions: [
      {
        whatToRepair: 'Замена нагревателя',
        workPrice: '1 200',
        sparePartPrice: '3500',
        probability: 56,
      },
      {
        whatToRepair: 'Замена нагревателя',
        workPrice: '2 200',
        sparePartPrice: '2500',
        probability: 78,
      },
      {
        whatToRepair: 'Замена нагревателя',
        workPrice: '5 200',
        sparePartPrice: '5500',
        probability: 27,
      },
    ],
  },
  {
    problemId: 10,
    problemName: 'Не крутится барабан',
    problemSolutions: [
      {
        whatToRepair: 'Замена Фильтра',
        workPrice: '1 200',
        sparePartPrice: '3500',
        probability: 89,
      },
      {
        whatToRepair: 'Замена Фильтра',
        workPrice: '2 200',
        sparePartPrice: '2500',
        probability: 38,
      },
      {
        whatToRepair: 'Замена Фильтра',
        workPrice: '5 200',
        sparePartPrice: '5500',
        probability: 84,
      },
    ],
  },
  {
    problemId: 11,
    problemName: 'Не работает кнопка включения',
    problemSolutions: [
      {
        whatToRepair: 'Замена кнопки',
        workPrice: '1 200',
        sparePartPrice: '3500',
        probability: 46,
      },
      {
        whatToRepair: 'Замена кнопки',
        workPrice: '2 200',
        sparePartPrice: '2500',
        probability: 28,
      },
      {
        whatToRepair: 'Замена кнопки',
        workPrice: '5 200',
        sparePartPrice: '5500',
        probability: 37,
      },
    ],
  },
];

const diagnosticsSection = document.querySelector('.diagnostics');
const diagnosticsResultSection = document.querySelector('.diagnostics-result');
const diagnosticsResultList = document.querySelector('.diagnostics-result__list');
const diagnosticsResultButtonBack = document.querySelector('.diagnostics-result__button-back');

function generateSolutions(problemSolutions) {
  let solutions = '';
  problemSolutions.forEach((solution) => {
    const { whatToRepair, workPrice, sparePartPrice, probability } = solution;
    solutions += `
    <li class="diagnostics-result__list-item">
      <div class="diagnostics-result__probability-image progress-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 34.83098 34.83098"
          class="progress-bar__svg">  
            <circle
              cx="17.41549"
              cy="17.41549"
              r="15.91549"
              class="progress-bar__background"
            />
            <circle
              cx="17.41549"
              cy="17.41549"
              r="15.91549"
              class="progress-bar__progress"
            />
        </svg>  
        <span class="diagnostics-result__text">
          <nobr>
            <span class="diagnostics-result__number" data-probability="${probability}">${probability}</span><span class="diagnostics-result__percent">%</span>
          </nobr>
        </span>
      </div>
      <div class="diagnostics-result__item-right">
        <p class="diagnostics-result__probable-repair">${whatToRepair}</p>
        <p class="diagnostics-result__price">
          ${workPrice}<span class="diagnostics-result__currency">₽</span>
        </p>
        <p class="diagnostics-result__spare-part-price">
          + запчасть от ${sparePartPrice}<span
            class="diagnostics-result__spare-part-currency"
            >₽</span
          >
        </p>
      </div>
    </li>
    `;
  });

  return solutions;
}

function removeOldSolutions() {
  const children = document.querySelectorAll('.diagnostics-result__list-item');
  children.forEach((child) => {
    child.parentNode.removeChild(child);
  });
}

function insertSolutions(parent, solutions) {
  parent.insertAdjacentHTML('beforeend', solutions);
}

// Scroll for modern browsers (not IE11)
// function scrollToTop(e, block) {
//   e.preventDefault();
//   const top = block.getBoundingClientRect().top - 0;
//   window.scrollBy({
//     top,
//     behavior: 'smooth',
//   });
// }

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const block = obj;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    block.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function diagnosticsResult() {
  problems.forEach((problem) => {
    const problemButton = document.querySelector(`[data-problem-id="${problem.problemId}"]`);
    const solutions = generateSolutions(problem.problemSolutions);

    problemButton.addEventListener('click', () => {
      removeOldSolutions();
      insertSolutions(diagnosticsResultList, solutions);

      diagnosticsSection.classList.add('diagnostics--hidden');
      diagnosticsResultSection.classList.add('diagnostics-result--visible');

      smoothScroll('.diagnostics-result', 1000);
      const progressBars = document.querySelectorAll('.progress-bar__progress');

      // animation of progress bar
      progressBars.forEach((progressBarItem, index) => {
        const progressBar = progressBarItem;
        progressBar.style.strokeDashoffset = ((-100) + problem.problemSolutions[index].probability);
      });

      const probability = document.querySelectorAll('.diagnostics-result__number');
      probability.forEach((item) => {
        const probabilityNumber = item.dataset.probability;
        animateValue(item, 0, probabilityNumber, 1500);
      });
    });
  });

  diagnosticsResultButtonBack.addEventListener('click', () => {
    diagnosticsSection.classList.remove('diagnostics--hidden');
    diagnosticsResultSection.classList.remove('diagnostics-result--visible');
  });
}

export default diagnosticsResult;
