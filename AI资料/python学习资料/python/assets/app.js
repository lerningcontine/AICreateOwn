const typingCode = `name = "小白"
days = 1

print("你好，" + name)
print("今天开始学 Python 第", days, "天")

if days == 1:
    print("先跑起来，再慢慢变强。")`;

const lessons = [
  {
    title: "第 1 课：Python 是什么",
    goal: "知道代码是给电脑的指令，学会运行 .py 文件。",
    code: `print("Hello Python")`,
    output: "Hello Python",
    task: "把文字换成你的名字，再运行一次。"
  },
  {
    title: "第 2 课：安装和运行",
    goal: "安装 Python，认识终端、解释器和编辑器。",
    code: `# 在终端运行
python3 --version`,
    output: "看到 Python 版本号就说明安装成功。",
    task: "创建 hello.py，写一行 print。"
  },
  {
    title: "第 3 课：变量",
    goal: "用变量保存名字、年龄、价格、余额。",
    code: `price = 12
count = 3
print(price * count)`,
    output: "36",
    task: "把价格和数量改成你买早餐的数字。"
  },
  {
    title: "第 4 课：数据类型",
    goal: "分清字符串、整数、小数和布尔值。",
    code: `name = "Ada"
age = 18
height = 1.68
is_student = True`,
    output: "每种数据适合装不同东西。",
    task: "写出你的 4 个个人信息变量。"
  },
  {
    title: "第 5 课：输入和输出",
    goal: "让程序接收用户输入，再给出回应。",
    code: `name = input("你叫什么？")
print("欢迎你，" + name)`,
    output: "输入名字后，程序会打招呼。",
    task: "加一个年龄输入，输出明年几岁。"
  },
  {
    title: "第 6 课：条件判断",
    goal: "用 if/elif/else 让程序做选择。",
    code: `score = 86
if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")
else:
    print("继续练")`,
    output: "及格",
    task: "加入 80 分以上输出“良好”。"
  },
  {
    title: "第 7 课：循环",
    goal: "用 for 和 while 重复做事情。",
    code: `for day in range(1, 4):
    print("学习第", day, "天")`,
    output: "学习第 1 天 / 第 2 天 / 第 3 天",
    task: "改成输出 7 天学习打卡。"
  },
  {
    title: "第 8 课：列表",
    goal: "保存一串数据，比如购物清单和分数表。",
    code: `foods = ["包子", "豆浆", "鸡蛋"]
foods.append("苹果")
print(foods)`,
    output: "['包子', '豆浆', '鸡蛋', '苹果']",
    task: "做一个你的本周任务列表。"
  },
  {
    title: "第 9 课：字典",
    goal: "用键值对保存更像表格的信息。",
    code: `user = {"name": "小白", "level": 1}
print(user["name"])`,
    output: "小白",
    task: "写一个商品字典：名称、价格、库存。"
  },
  {
    title: "第 10 课：函数",
    goal: "把一段常用逻辑打包，随时调用。",
    code: `def add(a, b):
    return a + b

print(add(3, 5))`,
    output: "8",
    task: "写一个计算打折后价格的函数。"
  },
  {
    title: "第 11 课：文件和异常",
    goal: "把数据保存到文件，并处理出错情况。",
    code: `try:
    with open("note.txt", "r") as f:
        print(f.read())
except FileNotFoundError:
    print("文件不存在")`,
    output: "没有 note.txt 时输出：文件不存在",
    task: "写一个保存日记到 diary.txt 的程序。"
  },
  {
    title: "第 12 课：模块和小项目",
    goal: "学会导入工具库，把知识拼成作品。",
    code: `import random
number = random.randint(1, 10)
print(number)`,
    output: "随机输出 1 到 10 的数字。",
    task: "打开下方项目代码，完成猜数字游戏。"
  }
];

const quizItems = [
  {
    question: "下面哪一行会在屏幕上输出文字？",
    options: ["print(\"你好\")", "show(\"你好\")", "say \"你好\""],
    answer: 0
  },
  {
    question: "变量的作用最像什么？",
    options: ["给数据贴名字的盒子", "删除文件的工具", "只能画图的按钮"],
    answer: 0
  },
  {
    question: "if 语句主要用来做什么？",
    options: ["判断条件，选择路线", "让程序变慢", "给文件改名"],
    answer: 0
  },
  {
    question: "列表适合保存什么？",
    options: ["一组有顺序的数据", "只能保存一个数字", "Python 的安装路径"],
    answer: 0
  },
  {
    question: "函数最大的好处是什么？",
    options: ["把常用逻辑打包复用", "让电脑自动联网", "让代码不能运行"],
    answer: 0
  }
];

let typingIndex = 0;
function typeHeroCode() {
  const node = document.querySelector("#typing-code");
  if (!node) return;
  node.textContent = typingCode.slice(0, typingIndex);
  typingIndex += 1;
  if (typingIndex > typingCode.length + 24) {
    typingIndex = 0;
  }
  setTimeout(typeHeroCode, typingIndex > typingCode.length ? 60 : 35);
}

function renderLessons() {
  const grid = document.querySelector("#lesson-grid");
  grid.innerHTML = lessons
    .map(
      (lesson, index) => `
        <article class="lesson-card">
          <span class="number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${lesson.title}</h3>
          <p>${lesson.goal}</p>
          <pre class="code-sample"><code>${escapeHtml(lesson.code)}</code></pre>
          <div class="lesson-actions">
            <button class="mini-button" data-output="${escapeHtml(lesson.output)}">看运行结果</button>
            <button class="mini-button secondary" data-output="${escapeHtml(lesson.task)}">今日练习</button>
          </div>
          <div class="output" aria-live="polite"></div>
        </article>
      `
    )
    .join("");

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-output]");
    if (!button) return;
    const card = button.closest(".lesson-card");
    const output = card.querySelector(".output");
    output.textContent = button.dataset.output;
  });
}

function renderQuiz() {
  const quiz = document.querySelector("#quiz");
  quiz.innerHTML = quizItems
    .map(
      (item, index) => `
      <article class="quiz-card">
        <h3>${index + 1}. ${item.question}</h3>
        <div class="quiz-options">
          ${item.options
            .map((option, optionIndex) => `<button data-question="${index}" data-option="${optionIndex}">${option}</button>`)
            .join("")}
        </div>
      </article>
    `
    )
    .join("");

  quiz.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-question]");
    if (!button) return;
    const questionIndex = Number(button.dataset.question);
    const optionIndex = Number(button.dataset.option);
    const card = button.closest(".quiz-card");
    card.querySelectorAll("button").forEach((item) => {
      item.classList.remove("correct", "wrong");
      item.disabled = true;
    });
    const isCorrect = optionIndex === quizItems[questionIndex].answer;
    button.dataset.selected = isCorrect ? "correct" : "wrong";
    button.classList.add(isCorrect ? "correct" : "wrong");
    card.querySelector(`[data-option="${quizItems[questionIndex].answer}"]`).classList.add("correct");
    updateScore();
  });
}

function updateScore() {
  const total = quizItems.length;
  const correct = document.querySelectorAll('.quiz-card button[data-selected="correct"]').length;
  const answered = document.querySelectorAll(".quiz-card button:disabled[data-question]").length / 3;
  document.querySelector("#score").textContent = `已完成 ${answered}/${total} 题，当前答对 ${correct}/${total} 题。`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

typeHeroCode();
renderLessons();
renderQuiz();
