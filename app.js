const seed = {
  projectName: "PROJETO 1 - DESCRIPTION",
  tasks: [
    ["CC24 XTR- BADGE AIRCROSS", "TOOL", "2025-05-13", "2025-06-09", "On time", 0, "TKO", "2025-05-13", "Concluded with a delay", 1],
    ["CC24 XTR- BADGE AIRCROSS", "SPV", "2025-06-27", "2025-10-16", "On time", 0, "", "", "", 2],
    ["CC24 XTR- BADGE AIRCROSS", "OT/OTOP", "2025-06-09", "2025-06-28", "On time", 0, "", "", "Concluded with a delay", 1],
    ["CC24 XTR- BADGE AIRCROSS", "SOURCING", "2024-10-18", "2025-05-07", "Concluded with a delay", 1, "ENG DOC SOURCING", "2024-10-18", "", 0],
    ["CC24 XTR- BADGE AIRCROSS", "PPAP", "2025-10-17", "2025-11-17", "On time", 0, "", "", "", 2],
    ["CC24 XTR- ADESIVO COLUNA C", "SOURCING", "2024-12-02", "2025-05-07", "Concluded with a delay", 1, "ENG DOC SOURCING", "2024-12-02", "", 0],
    ["CC24 XTR- ADESIVO COLUNA C", "OT", "2025-05-07", "2025-05-23", "On time", 0, "OTOP", "2025-05-23", "", 1],
    ["CC24 XTR- ADESIVO COLUNA C", "SPV", "2025-05-23", "2025-08-31", "On time", 0, "", "", "", 2],
    ["CC24 XTR- ADESIVO COLUNA C", "PPAP", "2025-08-31", "2025-09-20", "On time", 0, "", "", "", 2],
    ["CC24/CC21 XTR - REAR BADGE", "Negociação comercial", "2024-09-23", "2025-01-28", "Concluded with a delay", 0, "", "", "", 0],
    ["CC24/CC21 XTR - REAR BADGE", "Desenv Cor", "2025-01-30", "2025-04-14", "Concluded", 0, "", "", "", 1],
    ["CC24/CC21 XTR - REAR BADGE", "Delay entrega tinta", "2025-04-14", "2025-05-05", "Concluded with a delay", 0, "", "", "", 1],
    ["CC24/CC21 XTR - REAR BADGE", "OT", "2025-05-05", "2025-05-15", "Concluded", 0, "", "", "", 2],
    ["CC24/CC21 XTR - REAR BADGE", "TR BR/ AV Desig", "2025-05-21", "2025-06-18", "On time", 0, "", "", "", 2],
    ["CC24/CC21 XTR - REAR BADGE", "SPV", "2025-06-23", "2025-07-25", "On time", 0, "", "", "", 3],
    ["CC22 DARK EDITION - REAR BADGES", "FETE", "2024-09-25", "2025-01-02", "Concluded with a delay", 0, "", "", "", 0],
    ["CC22 DARK EDITION - REAR BADGES", "DESENV COR", "2025-01-04", "2025-03-04", "Concluded", 0, "", "", "", 1],
    ["CC22 DARK EDITION - REAR BADGES", "AJUSTE COR", "2025-03-05", "2025-04-21", "Concluded", 0, "", "", "", 1],
    ["CC22 DARK EDITION - REAR BADGES", "OT", "2025-04-22", "2025-05-02", "Concluded", 0, "", "", "", 1],
    ["CC22 DARK EDITION - REAR BADGES", "ATRASO LOG", "2025-05-02", "2025-05-24", "", 0, "", "", "", 2],
    ["CC22 DARK EDITION - REAR BADGES", "TR BR", "2025-05-25", "2025-06-06", "Attention point", 0, "", "", "", 2],
    ["CC22 DARK EDITION - REAR BADGES", "AV ASP", "2025-06-07", "2025-06-20", "Attention point", 0, "OTOP", "2025-06-20", "", 3],
  ].map(([component, description, start, end, status, progress, milestone, milestoneDate, milestoneStatus, level], index) => ({
    id: crypto.randomUUID(),
    index: index + 1,
    component,
    description,
    start,
    end,
    status,
    progress,
    milestone,
    milestoneDate,
    milestoneStatus,
    level,
  })),
  milestones: [
    { id: crypto.randomUUID(), name: "A", type: "Main Milestone", start: "2024-10-25", end: "", level: 1, color: 2 },
    { id: crypto.randomUUID(), name: "B", type: "Milestone", start: "2024-10-25", end: "", level: 0, color: 3 },
    { id: crypto.randomUUID(), name: "C", type: "Phase", start: "2024-10-25", end: "2024-11-25", level: 1, color: 1 },
  ],
  freeMilestones: [
    ["Teste 1", "Attention point", "2024-10-25", "CC24 XTR- BADGE AIRCROSS", 0],
    ["Teste 2", "Concluded", "2024-11-04", "CC24 XTR- BADGE AIRCROSS", 4],
    ["Teste 3", "Concluded Delay", "2024-11-14", "CC24 XTR- ADESIVO COLUNA C", 2],
    ["Teste 4", "Delayed", "2024-11-24", "CC24/CC21 XTR - REAR BADGE", 5],
    ["Teste 5", "Ontime", "2024-12-04", "CC22 DARK EDITION - REAR BADGES", 0],
    ["Teste 6", "Attention point", "2024-12-14", "CC24 XTR- BADGE AIRCROSS", 2],
    ["Teste 7", "Concluded", "2024-12-24", "CC24 XTR- BADGE AIRCROSS", 1],
    ["Teste 8", "Concluded Delay", "2025-01-03", "CC24 XTR- ADESIVO COLUNA C", 3],
    ["Teste 9", "Delayed", "2025-01-13", "CC24/CC21 XTR - REAR BADGE", 1],
    ["Teste 10", "Ontime", "2025-01-23", "CC22 DARK EDITION - REAR BADGES", 1],
    ["Teste 11", "Attention point", "2025-02-02", "CC24 XTR- BADGE AIRCROSS", 1],
    ["Teste 12", "Concluded", "2025-05-12", "CC24 XTR- BADGE AIRCROSS", 1],
  ].map(([name, status, date, component, level]) => ({ id: crypto.randomUUID(), name, status, date, component, level })),
  dependencies: []
};

const statusMeta = {
  "On time": { color: "#4a76b8", soft: "#dbe8f8", text: "#17365d" },
  "Attention point": { color: "#b87900", soft: "#fff1c7", text: "#5d3b00" },
  Delayed: { color: "#c74444", soft: "#f8dddd", text: "#681a1a" },
  Concluded: { color: "#4a5aa6", soft: "#e6eaff", text: "#1d285f" },
  "Concluded with a delay": { color: "#8d4f2b", soft: "#f3dfd3", text: "#4d2411" },
  "Concluded Delay": { color: "#8d4f2b", soft: "#f3dfd3", text: "#4d2411" },
  Ontime: { color: "#4a76b8", soft: "#dbe8f8", text: "#17365d" },
  "": { color: "#6f7885", soft: "#e7ebf0", text: "#303640" },
};

const storageKey = "schedule-studio-state-v1";
let state = loadState();
state.dependencies ??= [];

if (
  !state.dependencies.length &&
  state.tasks.length >= 2
) {
  state.dependencies.push({
    id: crypto.randomUUID(),
    predecessorId: state.tasks[0].id,
    successorId: state.tasks[1].id,
    type: "FS"
  });
}
let zoom = "month";
const zoomConfig = {
  week: {
    pxPerDay: 9,
    label: "Week"
  },

  month: {
    pxPerDay: 4.2,
    label: "Month"
  },

  quarter: {
    pxPerDay: 2,
    label: "Quarter"
  }
};
let showDependencies = true;
let collapsedComponents = {};
const history = {
  undoStack: [],
  redoStack: [],
};

function cloneState() {
  return JSON.parse(JSON.stringify(state));
}

function commitState() {
  history.undoStack.push(cloneState());

  if (history.undoStack.length > 50) {
    history.undoStack.shift();
  }

  history.redoStack = [];
}

function undo() {
  if (!history.undoStack.length) return;

  history.redoStack.push(cloneState());

  state = history.undoStack.pop();

  saveState();
  renderAll();
}

function redo() {
  if (!history.redoStack.length) return;

  history.undoStack.push(cloneState());

  state = history.redoStack.pop();

  saveState();
  renderAll();
}

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const dayMs = 24 * 60 * 60 * 1000;

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return structuredClone(seed);
  try {
    return JSON.parse(saved);
  } catch {
    return structuredClone(seed);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function dateValue(value) {
  return value ? new Date(`${value}T00:00:00`) : null;
}

function iso(date) {
  return date.toISOString().slice(0, 10);
}

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit" }).format(dateValue(value));
}

function monthLabel(date) {
  return new Intl.DateTimeFormat("en", { month: "short", year: "2-digit" }).format(date);
}

function quarterLabel(date) {
  const quarter =
    Math.floor(
      date.getMonth() / 3
    ) + 1;

  return `Q${quarter}`;
}

function getFilteredTasks() {
  const search = $("#searchInput").value.trim().toLowerCase();
  const component = $("#componentFilter").value;
  const status = $("#statusFilter").value;
  return state.tasks.filter((task) => {
    const matchSearch = !search || `${task.component} ${task.description}`.toLowerCase().includes(search);
    const matchComponent = component === "all" || task.component === component;
    const matchStatus = status === "all" || (status === "blank" ? !task.status : task.status === status);
    return matchSearch && matchComponent && matchStatus;
  });
}

function getRange(tasks = state.tasks) {
  const dates = [
    ...tasks.flatMap((task) => [dateValue(task.start), dateValue(task.end), dateValue(task.milestoneDate)]),
    ...state.milestones.flatMap((item) => [dateValue(item.start), dateValue(item.end)]),
    ...state.freeMilestones.map((item) => dateValue(item.date)),
  ].filter(Boolean);
  const min = new Date(Math.min(...dates));
  const max = new Date(Math.max(...dates));
  min.setDate(1);
  max.setMonth(max.getMonth() + 1, 0);
  return { min, max };
}

function getMonths(min, max) {
  const months = [];
  const current = new Date(min);
  current.setDate(1);
  while (current <= max) {
    months.push(new Date(current));
    current.setMonth(current.getMonth() + 1);
  }
  return months;
}

function daysBetween(a, b) {
  return Math.max(1, Math.round((dateValue(b) - dateValue(a)) / dayMs) + 1);
}

function taskDuration(task) {
  return daysBetween(
    task.start,
    task.end
  );
}

function metric(label, value, hint) {
  return `<article class="metric"><span>${label}</span><strong>${value}</strong><em>${hint}</em></article>`;
}

function renderMetrics() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const completed = state.tasks.filter((task) => task.status === "Concluded" || task.status === "Concluded with a delay").length;
  const late = state.tasks.filter((task) => dateValue(task.end) < today && task.status !== "Concluded").length;
  const components = new Set(state.tasks.map((task) => task.component)).size;
  const { min, max } = getRange();
  $("#metricsGrid").innerHTML = [
    metric("Activities", state.tasks.length, `${components} components`),
    metric("Completed", completed, `${Math.round((completed / state.tasks.length) * 100)}% of schedule`),
    metric("Open alerts", late, "Overdue or attention required"),
    metric("Range", `${monthLabel(min)} - ${monthLabel(max)}`, `${Math.round((max - min) / dayMs)} days`),
  ].join("");
}

function renderFilters() {
  const components = ["all", ...new Set(state.tasks.map((task) => task.component))];
  const current = $("#componentFilter").value || "all";
  $("#componentFilter").innerHTML = components
    .map((item) => `<option value="${escapeHtml(item)}">${item === "all" ? "All components" : escapeHtml(item)}</option>`)
    .join("");
  $("#componentFilter").value = components.includes(current) ? current : "all";
}

function renderLegend() {
  const statuses = ["On time", "Attention point", "Delayed", "Concluded", "Concluded with a delay"];
  $("#legend").innerHTML = $("#legendToggle").checked
    ? statuses.map((status) => `<span class="legend-item"><span class="dot" style="--dot:${statusMeta[status].color}"></span>${status}</span>`).join("")
    : "";
}

function renderDependencyLines(tasks, rowPositions, min, pxPerDay, timelineWidth) {
  const visibleTaskIds = new Set(tasks.map((task) => task.id));
  const lines = [];

  const headerHeight = 48;
  const milestoneHeight = 52;
  const componentHeight = 38;
  const taskHeight = 44;

  for (const dep of state.dependencies) {

    // ✅ filtro de tasks visíveis
    if (
      !visibleTaskIds.has(dep.predecessorId) ||
      !visibleTaskIds.has(dep.successorId)
    ) {
      continue;
    }

    // ✅ NOVO filtro (evita erro com tasks recolhidas)
    if (
      !rowPositions[dep.predecessorId] ||
      !rowPositions[dep.successorId]
    ) {
      continue;
    }

    const predecessor = state.tasks.find(
      (task) => task.id === dep.predecessorId
    );

    const successor = state.tasks.find(
      (task) => task.id === dep.successorId
    );

    if (!predecessor || !successor) continue;

    const predecessorStart =
      ((dateValue(predecessor.start) - min) / dayMs) * pxPerDay;

    const predecessorEnd =
      ((dateValue(predecessor.end) - min) / dayMs) * pxPerDay;

    const successorStart =
      ((dateValue(successor.start) - min) / dayMs) * pxPerDay;

    const successorEnd =
      ((dateValue(successor.end) - min) / dayMs) * pxPerDay;

    const fromX =
      dep.type === "SS" || dep.type === "SF"
        ? predecessorStart
        : predecessorEnd;

    const toX =
      dep.type === "FF" || dep.type === "SF"
        ? successorEnd
        : successorStart;

    const fromY =
      headerHeight +
      milestoneHeight +
      rowPositions[predecessor.id].offset +
      taskHeight / 2;

    const toY =
      headerHeight +
      milestoneHeight +
      rowPositions[successor.id].offset +
      taskHeight / 2;

    const outGap = 18;
    const verticalX = Math.max(fromX + outGap, toX - outGap);

    lines.push(`
      <path
        class="dependency-line"
        d="
          M ${fromX} ${fromY}
          L ${verticalX} ${fromY}
          L ${verticalX} ${toY}
          L ${toX} ${toY}
        "
      ></path>

      <text
        class="dependency-label"
        x="${verticalX + 4}"
        y="${(fromY + toY) / 2 - 6}"
      >${dep.type}</text>
    `);
  }

  return `
    <svg
      class="dependency-layer"
      width="${timelineWidth}"
      height="${Math.max(300, Object.keys(rowPositions).length * 44 + 220)}"
    >
      <defs>
        <marker
          id="dependencyArrow"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path
            d="M 0 0 L 8 4 L 0 8 z"
            class="dependency-arrow"
          ></path>
        </marker>
      </defs>

      ${lines.join("")}
    </svg>
  `;
}

function visualTimelineHeight(rowPositions) {
  return Math.max(300, Object.keys(rowPositions).length * 44 + 120);
}

function isComponentCollapsed(component) {
  return Boolean(collapsedComponents[component]);
}

function renderTimeline() {
  const tasks = getFilteredTasks().sort((a, b) => a.component.localeCompare(b.component) || dateValue(a.start) - dateValue(b.start));
  const { min, max } = getRange(tasks.length ? tasks : state.tasks);
  const totalDays = Math.max(1, Math.round((max - min) / dayMs) + 1);
  const pxPerDay =  zoomConfig[zoom].pxPerDay;
  const timelineWidth = Math.max(680, Math.round(totalDays * pxPerDay));
  const months = getMonths(min, max);
  const todayOffset = ((new Date().setHours(0, 0, 0, 0) - min) / dayMs) * pxPerDay;
  const monthColumns = months
    .map((month, index) => {
      const next = new Date(month);
      next.setMonth(next.getMonth() + 1);
      const days = Math.max(1, Math.round((Math.min(next, max) - Math.max(month, min)) / dayMs));
      return `<div class="month-cell" style="width:${days * pxPerDay}px;grid-column:${index + 1}">${
        zoom === "quarter"
          ? quarterLabel(month)
          : monthLabel(month)
      }</div>`;
    })
    .join("");

  const rows = [];
  let currentComponent = "";
  const rowPositions = {};
  let currentOffset = 0;
  for (const task of tasks) {
    if (task.component !== currentComponent) {
      currentComponent = task.component;
    
      const collapsed = isComponentCollapsed(currentComponent);
      const icon = collapsed ? "▶" : "▼";
    
      rows.push(`
        <div
          class="task-label component collapsible-component"
          data-component="${escapeAttr(currentComponent)}"
        >
          <span>${icon} ${escapeHtml(currentComponent)}</span>
        </div>
        <div
          class="lane component collapsible-component"
          data-component="${escapeAttr(currentComponent)}"
        ></div>
      `);
    
      currentOffset += 38;
    }

    if (isComponentCollapsed(currentComponent)) {
      continue;
    }

    rowPositions[task.id] = {
      offset: currentOffset,
    };
    currentOffset += 44;
    rows.push(`<div class="task-label" style="padding-left:${14 + Number(task.level || 0) * 12}px">
      <strong>${escapeHtml(task.description || "Untitled")}</strong>
      <small>${formatDate(task.start)} - ${formatDate(task.end)}</small>
    </div>${renderTaskLane(task, min, pxPerDay, timelineWidth)}`);
  }

  const milestoneBand = `<div class="task-label">Project milestones</div><div class="milestone-band" style="width:${timelineWidth}px">${renderMilestones(min, pxPerDay)}</div>`;
  const dependencyLines = showDependencies
  ? renderDependencyLines(
      tasks,
      rowPositions,
      min,
      pxPerDay,
      timelineWidth
    )
  : "";
  $("#timeline").innerHTML = 
  
  `<div class="timeline-grid">
    ${dependencyLines}
    <div class="timeline-corner">${tasks.length} visible activities</div>
    <div class="months" style="grid-template-columns:repeat(${months.length}, auto);width:${timelineWidth}px">${monthColumns}</div>
    ${milestoneBand}
    ${rows.join("")}
  </div>${todayOffset >= 0 && todayOffset <= timelineWidth ? `<div class="today-line" style="left:${260 + todayOffset}px"></div>` : ""}`;
  $$(".lane").forEach((lane) => {
    lane.style.width = `${timelineWidth}px`;
    const gridSize = {
      week: 63,
      month: 126,
      quarter: 252
    };
    
    lane.style.backgroundSize =
      `${gridSize[zoom]}px 100%`;
  });
}

function initMilestoneDragging() {
  document
    .querySelectorAll(
      ".draggable-milestone"
    )
    .forEach((marker) => {
      marker.addEventListener(
        "mousedown",
        startMilestoneDrag
      );
    });
}

function startMilestoneDrag(event) {
  event.preventDefault();
  event.stopPropagation();

  milestoneDragState = {
    id:
      event.currentTarget.dataset
        .milestoneId,

    taskId:
      event.currentTarget.dataset
        .taskId,

    type:
      event.currentTarget.dataset
        .milestoneType,

    startX: event.clientX,
  };

  commitState();

  document.body.classList.add(
    "dragging"
  );
}

function renderTaskLane(task, min, pxPerDay, width) {
  const meta = statusMeta[task.status || ""] || statusMeta[""];
  const left = Math.max(0, ((dateValue(task.start) - min) / dayMs) * pxPerDay);
  const barWidth = Math.max(10, daysBetween(task.start, task.end) * pxPerDay);
  const progress = Math.max(0, Math.min(1, Number(task.progress || 0)));

  const individual = task.milestoneDate
  ? `
  <span
    class="marker draggable-milestone"
    data-task-id="${task.id}"
    data-milestone-type="task"
    title="${escapeHtml(task.milestone || "Milestone")}"
    style="
      left:${((dateValue(task.milestoneDate)-min)/dayMs)*pxPerDay}px;
      --marker:${statusMeta[
        task.milestoneStatus ||
        task.status ||
        ""
      ].color}
    "
  ></span>
`
  : "";

  const freeMarkers = state.freeMilestones
    .filter((item) => item.component === task.component)
    .map((item) => {
      const offset = ((dateValue(item.date) - min) / dayMs) * pxPerDay;
      if (offset < 0 || offset > width) return "";
      return `<span
  class="marker free draggable-milestone"
  data-milestone-id="${item.id}"
  data-milestone-type="free" title="${escapeHtml(item.name)}" style="left:${offset}px;top:${25 + Number(item.level || 0) * 3}px;--marker:${(statusMeta[item.status] || statusMeta[""]).color}"></span>`;
    })
    .join("");

  return `<div class="lane" style="width:${width}px">
    <div class="bar draggable-bar" data-task-id="${task.id}"
      style="left:${left}px;width:${barWidth}px;
      --bar:${meta.color};--bar-soft:${meta.soft};--bar-text:${meta.text}">

      <span
        class="resize-handle left"
        data-resize="start"
        data-task-id="${task.id}"
      ></span>

      <div class="bar-progress" style="width:${progress * 100}%"></div>

      <div class="bar-label">
        ${escapeHtml(task.description || "")}
      </div>

      <span
        class="resize-handle right"
        data-resize="end"
        data-task-id="${task.id}"
      ></span>

    </div>

    ${individual}${freeMarkers}
  </div>`;
}

function renderMilestones(min, pxPerDay) {
  return state.milestones
    .map((item, index) => {
      if (!item.start) return "";
      const left = ((dateValue(item.start) - min) / dayMs) * pxPerDay;
      const colors = ["#4a5aa6", "#147c73", "#b87900", "#c74444"];
      return `<span class="marker draggable-milestone" data-milestone-id="${item.id}" data-milestone-type="project" style="left:${left}px;top:${20 + Number(item.level || 0) * 16}px;--marker:${colors[item.color] || colors[index % colors.length]}"></span>
      <span class="milestone-label" style="left:${left}px;top:${2 + Number(item.level || 0) * 16}px">${escapeHtml(item.name)}</span>`;
    })
    .join("");
}

function tableInput(value, type, dataset) {
  return `<input type="${type}" value="${escapeAttr(value ?? "")}" ${dataset}>`;
}

function tableSelect(value, options, dataset) {
  return `<select ${dataset}>${options.map((option) => `<option ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`;
}

function renderTasksTable() {
  const statuses = ["", "On time", "Attention point", "Delayed", "Concluded", "Concluded with a delay"];
  $("#tasksTable").innerHTML = `<thead><tr>
    <th>Component</th><th>Description</th><th>Initial</th><th>Final</th><th>Status</th><th>%</th>
<th>Milestone</th>
<th>Date</th>
<th>Predecessor</th>
<th>Dependency</th>
<th>Level</th><th></th>
  </tr></thead><tbody>${state.tasks
    .map(
      (task) => `<tr data-id="${task.id}">
      <td>${tableInput(task.component, "text", 'data-field="component"')}</td>
      <td>${tableInput(task.description, "text", 'data-field="description"')}</td>
      <td>${tableInput(task.start, "date", 'data-field="start"')}</td>
      <td>${tableInput(task.end, "date", 'data-field="end"')}</td>
      <td>${tableSelect(task.status || "", statuses, 'data-field="status"')}</td>
      <td>${tableInput(task.progress ?? 0, "number", 'min="0" max="1" step="0.05" data-field="progress"')}</td>
      <td>${tableInput(task.milestone, "text", 'data-field="milestone"')}</td>
      <td>${tableInput(task.milestoneDate, "date", 'data-field="milestoneDate"')}</td>      
      <td>${dependencySelect(task)}</td>
      <td>${dependencyTypeSelect(task)}</td>
      <td>${tableInput(task.level ?? 0, "number", 'min="0" max="10" data-field="level"')}</td>
      <td><button class="row-action" data-delete-task="${task.id}" title="Delete"><i data-lucide="trash-2"></i></button></td>
    </tr>`,
    )
    .join("")}</tbody>`;
}

function renderMilestoneTables() {
  $("#milestonesTable").innerHTML = `<thead><tr><th>Name</th><th>Type</th><th>Initial</th><th>Final</th><th>Level</th><th></th></tr></thead><tbody>${state.milestones
    .map(
      (item) => `<tr data-id="${item.id}">
      <td>${tableInput(item.name, "text", 'data-ms-field="name"')}</td>
      <td>${tableSelect(item.type, ["Main Milestone", "Milestone", "Phase"], 'data-ms-field="type"')}</td>
      <td>${tableInput(item.start, "date", 'data-ms-field="start"')}</td>
      <td>${tableInput(item.end, "date", 'data-ms-field="end"')}</td>
      <td>${tableInput(item.level ?? 0, "number", 'min="0" max="10" data-ms-field="level"')}</td>
      <td><button class="row-action" data-delete-ms="${item.id}" title="Delete"><i data-lucide="trash-2"></i></button></td>
    </tr>`,
    )
    .join("")}</tbody>`;

  const components = [...new Set(state.tasks.map((task) => task.component))];
  const statuses = ["Attention point", "Concluded", "Concluded Delay", "Delayed", "Ontime"];
  $("#freeMilestonesTable").innerHTML = `<thead><tr><th>Name</th><th>Status</th><th>Date</th><th>Component</th><th>Level</th><th></th></tr></thead><tbody>${state.freeMilestones
    .map(
      (item) => `<tr data-id="${item.id}">
      <td>${tableInput(item.name, "text", 'data-free-field="name"')}</td>
      <td>${tableSelect(item.status, statuses, 'data-free-field="status"')}</td>
      <td>${tableInput(item.date, "date", 'data-free-field="date"')}</td>
      <td>${tableSelect(item.component, components, 'data-free-field="component"')}</td>
      <td>${tableInput(item.level ?? 0, "number", 'min="0" max="10" data-free-field="level"')}</td>
      <td><button class="row-action" data-delete-free="${item.id}" title="Delete"><i data-lucide="trash-2"></i></button></td>
    </tr>`,
    )
    .join("")}</tbody>`;
}

function getAlerts() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return state.tasks
    .filter((task) => task.status !== "Concluded")
    .map((task) => {
      const end = dateValue(task.end);
      const days = Math.ceil((end - today) / dayMs);
      let category = "";
      if (days < 0) category = "Overdue";
      else if (days <= 7) category = "Next 7 days";
      else if (days <= 15) category = "Next 15 days";
      return category ? { task, days, category } : null;
    })
    .filter(Boolean);
}

function getDependencyForTask(taskId) {
  return state.dependencies.find(
    (dep) => dep.successorId === taskId
  );
}

function dependencySelect(task) {
  const dependency = getDependencyForTask(task.id);

  const options = [
    `<option value="">None</option>`,
    ...state.tasks
      .filter((item) => item.id !== task.id)
      .map(
        (item) =>
          `<option value="${item.id}" ${
            dependency?.predecessorId === item.id ? "selected" : ""
          }>
            ${escapeHtml(item.component)} - ${escapeHtml(item.description)}
          </option>`
      ),
  ];

  return `<select data-dependency-predecessor="${task.id}">
    ${options.join("")}
  </select>`;
}


function dependencyTypeSelect(task) {
  const dependency = getDependencyForTask(task.id);

  return `<select data-dependency-type="${task.id}">
    ${["FS", "SS", "FF", "SF"]
      .map(
        (type) =>
          `<option value="${type}" ${
            dependency?.type === type ? "selected" : ""
          }>${type}</option>`
      )
      .join("")}
  </select>`;
}

function renderAlerts() {
  const alerts = getAlerts();
  $("#alertCount").textContent = alerts.length;
  $("#alertsList").innerHTML = alerts.length
    ? alerts
        .map((alert) => {
          const color = alert.days < 0 ? "var(--red)" : alert.days <= 7 ? "var(--amber)" : "var(--teal)";
          const due = alert.days < 0 ? `${Math.abs(alert.days)} days late` : `${alert.days} days left`;
          return `<article class="alert-card" style="--alert:${color}">
          <strong>${escapeHtml(alert.category)} · ${escapeHtml(alert.task.component)}</strong>
          <span>${escapeHtml(alert.task.description)} · ${formatDate(alert.task.end)} · ${due} · ${escapeHtml(alert.task.status || "No status")}</span>
        </article>`;
        })
        .join("")
    : `<div class="empty-state">No open alerts.</div>`;
}

function renderAll() {
  $("#projectName").value = state.projectName;
  $("#pageTitle").textContent = state.projectName || "Schedule Generator";
  renderFilters();
  renderMetrics();
  renderLegend();
  refreshTimelineInteractions();
  renderTasksTable();
  renderMilestoneTables();
  renderAlerts();
  lucide.createIcons();
  initTaskDragging();
  initTaskResize();
  initMilestoneDragging();
}
function initTaskResize() {
  document
    .querySelectorAll(".resize-handle")
    .forEach((handle) => {
      handle.addEventListener(
        "mousedown",
        startResize
      );
    });
}
function startResize(event) {
  event.stopPropagation();
  event.preventDefault();
  const taskId = event.currentTarget.dataset.taskId;

if (hasPredecessor(taskId)) {
  alert("This activity has a predecessor and cannot be resized manually.");
  return;
}

resizeState = {
  taskId,
  edge: event.currentTarget.dataset.resize,
  startX: event.clientX,
};

  commitState();

  document.body.classList.add("dragging");
}
function updateField(collection, id, field, value) {
  commitState();
  if (
    collection === "tasks" &&
    hasPredecessor(id) &&
    ["start", "end"].includes(field)
  ) {
    alert("This activity has a predecessor. Its dates are controlled by dependency rules.");
    renderAll();
    return;
  }
  const item = state[collection].find((entry) => entry.id === id);
  if (!item) return;
  item[field] = ["progress", "level", "color"].includes(field) ? Number(value || 0) : value;
  saveState();
  renderAll();
}


function recalculateDependencies(
  sourceTaskId
) {
  const links =
    state.dependencies.filter(
      (dep) =>
        dep.predecessorId ===
        sourceTaskId
    );

  for (const dep of links) {

    const source =
      state.tasks.find(
        (t) => t.id === dep.predecessorId
      );

    const target =
      state.tasks.find(
        (t) => t.id === dep.successorId
      );

    if (!source || !target) continue;

    const duration =
      taskDuration(target);

    const sourceStart =
      dateValue(source.start);

    const sourceEnd =
      dateValue(source.end);

    let newStart;
    let newEnd;

    switch (dep.type) {

      case "FS":
        newStart = new Date(sourceEnd);
        newStart.setDate(newStart.getDate() + 1);

        newEnd = new Date(newStart);
        newEnd.setDate(
          newEnd.getDate() + duration - 1
        );
        break;

      case "SS":
        newStart = new Date(sourceStart);

        newEnd = new Date(newStart);
        newEnd.setDate(
          newEnd.getDate() + duration - 1
        );
        break;

      case "FF":
        newEnd = new Date(sourceEnd);

        newStart = new Date(newEnd);
        newStart.setDate(
          newStart.getDate() - duration + 1
        );
        break;

      case "SF":
        newEnd = new Date(sourceStart);

        newStart = new Date(newEnd);
        newStart.setDate(
          newStart.getDate() - duration + 1
        );
        break;
    }

    target.start = iso(newStart);
    target.end = iso(newEnd);

    recalculateDependencies(target.id);
  }
}


function addDependency(
  predecessorId,
  successorId,
  type = "FS"
) {
  commitState();

  state.dependencies.push({
    id: crypto.randomUUID(),
    predecessorId,
    successorId,
    type
  });

  saveState();
  renderAll();
}


function initTaskDragging() {
  document.querySelectorAll(".draggable-bar").forEach((bar) => {
    bar.addEventListener("mousedown", startTaskDrag);
  });
}

function hasPredecessor(taskId) {
  return state.dependencies.some(
    (dep) => dep.successorId === taskId
  );
}

function getTaskPredecessorDependency(taskId) {
  return state.dependencies.find(
    (dep) => dep.successorId === taskId
  );
}

function startTaskDrag(event) {
  event.preventDefault();

  const taskId = event.currentTarget.dataset.taskId;

  if (hasPredecessor(taskId)) {
    alert("This activity has a predecessor and cannot be moved manually.");
    return;
  }

  dragState = {
    taskId,
    startX: event.clientX,
  };

  commitState();

  document.body.classList.add("dragging");
}

function shiftTask(task, days) {
  const start = dateValue(task.start);
  const end = dateValue(task.end);

  start.setDate(start.getDate() + days);
  end.setDate(end.getDate() + days);

  task.start = iso(start);
  recalculateDependencies(task.id);
  task.end = iso(end);
  recalculateDependencies(task.id);

  if (task.milestoneDate) {
    const milestone = dateValue(task.milestoneDate);

    milestone.setDate(
      milestone.getDate() + days
    );

    task.milestoneDate = iso(milestone);
  }
  recalculateDependencies(task.id);
}

document.addEventListener("mousemove", (event) => {
  if (milestoneDragState) {

    const pxPerDay =
    zoomConfig[zoom].pxPerDay;
  
    const deltaPx =
      event.clientX -
      milestoneDragState.startX;
  
    const deltaDays =
      Math.round(deltaPx / pxPerDay);
  
    if (!deltaDays) return;
  
    if (
      milestoneDragState.type ===
      "project"
    ) {
  
      const item =
        state.milestones.find(
          (m) =>
            m.id ===
            milestoneDragState.id
        );
  
      if (item?.start) {
        const date =
          dateValue(item.start);
  
        date.setDate(
          date.getDate() +
          deltaDays
        );
  
        item.start = iso(date);
      }
    }
  
    if (
      milestoneDragState.type ===
      "free"
    ) {
  
      const item =
        state.freeMilestones.find(
          (m) =>
            m.id ===
            milestoneDragState.id
        );
  
      if (item?.date) {
        const date =
          dateValue(item.date);
  
        date.setDate(
          date.getDate() +
          deltaDays
        );
  
        item.date = iso(date);
      }
    }
  
    if (
      milestoneDragState.type ===
      "task"
    ) {
  
      const task =
        state.tasks.find(
          (t) =>
            t.id ===
            milestoneDragState.taskId
        );
  
      if (
        task &&
        task.milestoneDate
      ) {
  
        const date =
          dateValue(
            task.milestoneDate
          );
  
        date.setDate(
          date.getDate() +
          deltaDays
        );
  
        task.milestoneDate =
          iso(date);
      }
    }
  
    milestoneDragState.startX =
      event.clientX;
  
    saveState();
  
    refreshTimelineInteractions();
  
    initTaskDragging();
    initTaskResize();
    initMilestoneDragging();
  }
  if (!dragState) return;

  const pxPerDay =
  zoomConfig[zoom].pxPerDay;

  const deltaPx =
    event.clientX - dragState.startX;

  const deltaDays =
    Math.round(deltaPx / pxPerDay);

  if (!deltaDays) return;

  const task = state.tasks.find(
    (item) =>
      item.id === dragState.taskId
  );

  if (!task) return;

  shiftTask(task, deltaDays);

  dragState.startX = event.clientX;

  saveState();

  refreshTimelineInteractions();

  initTaskDragging();
});

document.addEventListener("mouseup", () => {
  const wasInteracting =
    dragState ||
    resizeState ||
    milestoneDragState;

  dragState = null;
  resizeState = null;
  milestoneDragState = null;

  document.body.classList.remove("dragging");

  if (wasInteracting) {
    renderAll();
  }
});


document.addEventListener(
  "mousemove",
  (event) => {
    if (!resizeState) return;

    const pxPerDay =
    zoomConfig[zoom].pxPerDay;

    const deltaPx =
      event.clientX - resizeState.startX;

    const deltaDays =
      Math.round(deltaPx / pxPerDay);

    if (!deltaDays) return;

    const task = state.tasks.find(
      (item) =>
        item.id === resizeState.taskId
    );

    if (!task) return;

    const start = dateValue(task.start);
    const end = dateValue(task.end);

    if (resizeState.edge === "start") {
      start.setDate(
        start.getDate() + deltaDays
      );

      if (start >= end) {
        start.setDate(end.getDate() - 1);
      }

      task.start = iso(start);
      recalculateDependencies(task.id);
    }

    if (resizeState.edge === "end") {
      end.setDate(
        end.getDate() + deltaDays
      );

      if (end <= start) {
        end.setDate(start.getDate() + 1);
      }

      task.end = iso(end);
      recalculateDependencies(task.id);
    }

    resizeState.startX = event.clientX;

    saveState();
    refreshTimelineInteractions();

    initTaskDragging();
    initTaskResize();
  }
);
function updateDependencyPredecessor(successorId, predecessorId) {
  commitState();

  state.dependencies = state.dependencies.filter(
    (dep) => dep.successorId !== successorId
  );

  if (predecessorId) {
    state.dependencies.push({
      id: crypto.randomUUID(),
      predecessorId,
      successorId,
      type: "FS",
    });

    recalculateDependencies(predecessorId);
  }

  saveState();
  renderAll();
}
function updateDependencyType(successorId, type) {
  commitState();

  const dependency = getDependencyForTask(successorId);

  if (!dependency) return;

  dependency.type = type;

  recalculateDependencies(dependency.predecessorId);

  saveState();
  renderAll();
}

function bindEvents() {

  document.addEventListener("click", (event) => {
    const componentHeader = event.target.closest(".collapsible-component");
  
    if (!componentHeader) return;
  
    const component = componentHeader.dataset.component;
  
    if (!component) return;
  
    collapsedComponents[component] = !collapsedComponents[component];
  
    refreshTimelineInteractions();
    initTaskDragging();
    initTaskResize();
    initMilestoneDragging();
  });

  $("#dependenciesToggle").addEventListener("change", (event) => {
    showDependencies = event.target.checked;
    refreshTimelineInteractions();
  });

  document.addEventListener("mousedown", (event) => {
    if (
      event.target.matches("select") ||
      event.target.matches("option")
    ) {
      event.stopPropagation();
    }
  });


  document.addEventListener("keydown", (event) => {
    const isMac = navigator.platform.includes("Mac");
  
    const ctrl = isMac ? event.metaKey : event.ctrlKey;
  
    if (!ctrl) return;
  
    if (event.key.toLowerCase() === "z" && !event.shiftKey) {
      event.preventDefault();
      undo();
    }
  
    if (
      event.key.toLowerCase() === "y" ||
      (event.key.toLowerCase() === "z" && event.shiftKey)
    ) {
      event.preventDefault();
      redo();
    }
  });

  $$(".nav-tab").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".nav-tab").forEach((tab) => tab.classList.remove("active"));
      $$(".view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      $(`#${button.dataset.view}View`).classList.add("active");
    });
  });

  $("#projectName").addEventListener("input", (event) => {
    state.projectName = event.target.value;
    saveState();
    $("#pageTitle").textContent = state.projectName;
  });

  ["searchInput", "componentFilter", "statusFilter", "weeksToggle", "legendToggle", "dependenciesToggle"].forEach((id) => {
    $(`#${id}`).addEventListener("input", renderAll);
  });

  $$(".segmented").forEach((button) => {
    button.addEventListener("click", () => {
      zoom = button.dataset.zoom;
  
      $$(".segmented").forEach((item) =>
        item.classList.toggle(
          "active",
          item.dataset.zoom === zoom
        )
      );
  
      refreshTimelineInteractions();
    });
  });
  

  document.addEventListener("change", (event) => {
    if (event.target.dataset.dependencyPredecessor) {
      updateDependencyPredecessor(
        event.target.dataset.dependencyPredecessor,
        event.target.value
      );
      return;
    }
  
    if (event.target.dataset.dependencyType) {
      updateDependencyType(
        event.target.dataset.dependencyType,
        event.target.value
      );
      return;
    }
  
    const row = event.target.closest("tr[data-id]");
    if (!row) return;
  
    if (event.target.dataset.field) {
      updateField("tasks", row.dataset.id, event.target.dataset.field, event.target.value);
    }
  
    if (event.target.dataset.msField) {
      updateField("milestones", row.dataset.id, event.target.dataset.msField, event.target.value);
    }
  
    if (event.target.dataset.freeField) {
      updateField("freeMilestones", row.dataset.id, event.target.dataset.freeField, event.target.value);
    }
  });

  document.addEventListener("click", (event) => {
    const deleteTask = event.target.closest("[data-delete-task]");
    const deleteMs = event.target.closest("[data-delete-ms]");
    const deleteFree = event.target.closest("[data-delete-free]");
    commitState();
    if (deleteTask) state.tasks = state.tasks.filter((task) => task.id !== deleteTask.dataset.deleteTask);
    if (deleteMs) state.milestones = state.milestones.filter((item) => item.id !== deleteMs.dataset.deleteMs);
    if (deleteFree) state.freeMilestones = state.freeMilestones.filter((item) => item.id !== deleteFree.dataset.deleteFree);
    if (deleteTask || deleteMs || deleteFree) {
      saveState();
      renderAll();
    }
  });

  $("#addTaskButton").addEventListener("click", () => {
    commitState();
    state.tasks.push({
      id: crypto.randomUUID(),
      component: "New component",
      description: "New activity",
      start: iso(new Date()),
      end: iso(new Date(Date.now() + 14 * dayMs)),
      status: "On time",
      progress: 0,
      milestone: "",
      milestoneDate: "",
      milestoneStatus: "",
      level: 0,
    });
    saveState();
    renderAll();
  });

  $("#addMilestoneButton").addEventListener("click", () => {
    commitState();
    state.milestones.push({ id: crypto.randomUUID(), name: "New", type: "Milestone", start: iso(new Date()), end: "", level: 0, color: 1 });
    saveState();
    renderAll();
  });

  $("#addFreeMilestoneButton").addEventListener("click", () => {
    commitState();
    state.freeMilestones.push({
      id: crypto.randomUUID(),
      name: "New marker",
      status: "Attention point",
      date: iso(new Date()),
      component: state.tasks[0]?.component || "",
      level: 0,
    });
    saveState();
    renderAll();
  });

  $("#resetButton").addEventListener("click", () => {
    state = structuredClone(seed);
    saveState();
    renderAll();
  });

  $("#importJsonButton").addEventListener("click", () => $("#importJsonInput").click());
  $("#importJsonInput").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const imported = JSON.parse(await file.text());
      if (!Array.isArray(imported.tasks) || !Array.isArray(imported.milestones) || !Array.isArray(imported.freeMilestones)) {
        throw new Error("Invalid Schedule Studio file");
      }
      state = imported;
      saveState();
      renderAll();
    } catch {
      alert("This JSON file is not a valid Schedule Studio export.");
    } finally {
      event.target.value = "";
    }
  });

  $("#exportJsonButton").addEventListener("click", () => download("schedule-studio.json", JSON.stringify(state, null, 2), "application/json"));
  $("#exportCsvButton").addEventListener("click", () => download("schedule-activities.csv", toCsv(state.tasks), "text/csv"));
  $("#alertsButton").addEventListener("click", () => $("#alertsDialog").showModal());
  $("#closeAlertsButton").addEventListener("click", () => $("#alertsDialog").close());
}

function toCsv(rows) {
  const headers = ["component", "description", "start", "end", "status", "progress", "milestone", "milestoneDate", "level"];
  return [headers.join(","), ...rows.map((row) => headers.map((key) => `"${String(row[key] ?? "").replaceAll('"', '""')}"`).join(","))].join("\n");
}

function refreshTimelineInteractions() {
  renderTimeline();
  initTaskDragging();
  initTaskResize();
  initMilestoneDragging();
}

function download(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

let dragState = null;
let resizeState = null;
let milestoneDragState = null;




bindEvents();
renderAll();
