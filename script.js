const form = document.querySelector("#searchForm");
const resetDemo = document.querySelector(".reset-btn");
const notificationButton = document.querySelector("#notificationButton");
const notificationPanel = document.querySelector("#notificationPanel");
const notificationCount = document.querySelector("#notificationCount");
const notificationSummary = document.querySelector("#notificationSummary");
const markNotificationsRead = document.querySelector("#markNotificationsRead");
const navViewLinks = document.querySelectorAll("[data-view-link]");
const viewPanels = document.querySelectorAll("[data-view]");
const pageTitle = document.querySelector(".top-title h1");
const applicationSearch = document.querySelector("#applicationSearch");
const programmeFilter = document.querySelector("#programmeFilter");
const applicantTypeFilter = document.querySelector("#applicantTypeFilter");
const nationalityFilter = document.querySelector("#nationalityFilter");
const applicantsPerPage = document.querySelector("#applicantsPerPage");
const programmePublicStatusFilter = document.querySelector("#programmePublicStatusFilter");
const programmesPerPage = document.querySelector("#programmesPerPage");
const programmesSummary = document.querySelector("#programmesSummary");
const programmesTableBody = document.querySelector(".programmes-table tbody");
let programmeRows = document.querySelectorAll(".programmes-table tbody tr");
const programmePaginationSummary = document.querySelector("#programmePaginationSummary");
const programmePageIndicator = document.querySelector("#programmePageIndicator");
const prevProgrammePage = document.querySelector("#prevProgrammePage");
const nextProgrammePage = document.querySelector("#nextProgrammePage");
const createProgramme = document.querySelector("#createProgramme");
const programmeCreatePanel = document.querySelector("#programmeCreatePanel");
const programmeDetail = document.querySelector("#programmeDetail");
const cancelProgrammeCreate = document.querySelector("#cancelProgrammeCreate");
const backToProgrammes = document.querySelector("#backToProgrammes");
const backToProgrammesFromDetail = document.querySelector("#backToProgrammesFromDetail");
const programmeManagementActions = document.querySelector("#programmeManagementActions");
const programmeDetailTabButtons = document.querySelectorAll("[data-programme-tab]");
const programmeDetailPanels = document.querySelectorAll("[data-programme-panel]");
const programmeApplicationsRows = document.querySelector("#programmeApplicationsRows");
const editProgrammeDetails = document.querySelector("#editProgrammeDetails");
const cancelProgrammeDetailsEdit = document.querySelector("#cancelProgrammeDetailsEdit");
const saveProgrammeDetails = document.querySelector("#saveProgrammeDetails");
const programmeEditWarning = document.querySelector("#programmeEditWarning");
const confirmProgrammeChanges = document.querySelector("#confirmProgrammeChanges");
const programmeChangesModal = document.querySelector("#programmeChangesModal");
const closeProgrammeChanges = document.querySelector("#closeProgrammeChanges");
const cancelProgrammeChanges = document.querySelector("#cancelProgrammeChanges");
const proceedProgrammeChanges = document.querySelector("#proceedProgrammeChanges");
const programmeStatusNoticeAction = document.querySelector("#programmeStatusNoticeAction");
const requestedChangesModal = document.querySelector("#requestedChangesModal");
const closeRequestedChanges = document.querySelector("#closeRequestedChanges");
const cancelRequestedChanges = document.querySelector("#cancelRequestedChanges");
const submitRequestedChanges = document.querySelector("#submitRequestedChanges");
const requestedProgrammeFee = document.querySelector("#requestedProgrammeFee");
const requestedProgrammeLearning = document.querySelector("#requestedProgrammeLearning");
const requestedProgrammeTarget = document.querySelector("#requestedProgrammeTarget");
const requestedProgrammeFeeNote = document.querySelector("#requestedProgrammeFeeNote");
const requestedProgrammeLearningNote = document.querySelector("#requestedProgrammeLearningNote");
const requestedProgrammeTargetNote = document.querySelector("#requestedProgrammeTargetNote");
const requestedChangesTitle = document.querySelector("#requestedChangesTitle");
const draftProgrammeModal = document.querySelector("#draftProgrammeModal");
const closeDraftProgramme = document.querySelector("#closeDraftProgramme");
const cancelDraftProgramme = document.querySelector("#cancelDraftProgramme");
const saveDraftProgramme = document.querySelector("#saveDraftProgramme");
const submitDraftProgramme = document.querySelector("#submitDraftProgramme");
const draftProgrammeName = document.querySelector("#draftProgrammeName");
const draftProgrammeOverview = document.querySelector("#draftProgrammeOverview");
const draftProgrammeDuration = document.querySelector("#draftProgrammeDuration");
const draftProgrammeFee = document.querySelector("#draftProgrammeFee");
const draftProgrammeTarget = document.querySelector("#draftProgrammeTarget");
const draftProgrammeLearning = document.querySelector("#draftProgrammeLearning");
const kptNoticeModal = document.querySelector("#kptNoticeModal");
const kptNoticeTitle = document.querySelector("#kptNoticeTitle");
const kptNoticeBody = document.querySelector("#kptNoticeBody");
const closeKptNotice = document.querySelector("#closeKptNotice");
const doneKptNotice = document.querySelector("#doneKptNotice");
const programmesControlPanel = document.querySelector(".programmes-control-panel");
const programmesTableWrap = document.querySelector(".programmes-table-wrap");
const programmePaginationRow = document.querySelector(".programme-pagination-row");
const programmeActivities = document.querySelector("#programmeActivities");
const addProgrammeActivity = document.querySelector("#addProgrammeActivity");
const programmeLearningScopes = document.querySelector("#programmeLearningScopes");
const addProgrammeLearningScope = document.querySelector("#addProgrammeLearningScope");
const createProgrammeName = document.querySelector("#createProgrammeName");
const createProgrammeOverview = document.querySelector("#createProgrammeOverview");
const createProgrammeDuration = document.querySelector("#createProgrammeDuration");
const createProgrammeCurrency = document.querySelector("#createProgrammeCurrency");
const createProgrammeFee = document.querySelector("#createProgrammeFee");
const createProgrammeLanguage = document.querySelector("#createProgrammeLanguage");
const createProgrammeCredit = document.querySelector("#createProgrammeCredit");
const createProgrammeTarget = document.querySelector("#createProgrammeTarget");
const createProgrammeGallery = document.querySelector("#createProgrammeGallery");
const browseProgrammeGallery = document.querySelector("#browseProgrammeGallery");
const programmeGalleryCount = document.querySelector("#programmeGalleryCount");
const saveProgrammeDraft = document.querySelector("#saveProgrammeDraft");
const submitProgrammeKpt = document.querySelector("#submitProgrammeKpt");
const columnToggles = document.querySelectorAll("[data-column-toggle]");
const statusGroupToggles = document.querySelectorAll("[data-status-group]");
const allStatusFilters = document.querySelector("#allStatusFilters");
const clearStatusFilters = document.querySelector("#clearStatusFilters");
const statusFilterAccordion = document.querySelector("#statusFilterAccordion");
const applicationStatusGroups = document.querySelector("#applicationStatusGroups");
const applicationRows = document.querySelectorAll("[data-application-status]");
const applicationSortButtons = document.querySelectorAll(".applications-table [data-sort-key]");
const paginationSummary = document.querySelector("#paginationSummary");
const pageIndicator = document.querySelector("#pageIndicator");
const prevPage = document.querySelector("#prevPage");
const nextPage = document.querySelector("#nextPage");
const tooltipTriggers = document.querySelectorAll("[data-tooltip-trigger]");
const sectionTooltipTriggers = document.querySelectorAll(".section-tooltip");
const applicantDetail = document.querySelector("#applicantDetail");
const profileSaveButtons = document.querySelectorAll("[data-profile-save]");
const profileTabButtons = document.querySelectorAll("[data-profile-tab]");
const profileTabPanels = document.querySelectorAll("[data-profile-panel]");
const editUniversityProfile = document.querySelector("#editUniversityProfile");
const cancelUniversityProfile = document.querySelector("#cancelUniversityProfile");
const changeUniversityLogo = document.querySelector("#changeUniversityLogo");
const universityLogoUpload = document.querySelector("#universityLogoUpload");
const profileLogoImage = document.querySelector("#profileLogoImage");
const brandLogo = document.querySelector(".brand-logo");
const editProfileContact = document.querySelector("#editProfileContact");
const cancelProfileContact = document.querySelector("#cancelProfileContact");
const kptComplianceReplyModal = document.querySelector("#kptComplianceReplyModal");
const closeKptComplianceReply = document.querySelector("#closeKptComplianceReply");
const cancelKptComplianceReply = document.querySelector("#cancelKptComplianceReply");
const sendKptComplianceReply = document.querySelector("#sendKptComplianceReply");
const kptComplianceReplyMessage = document.querySelector("#kptComplianceReplyMessage");
const kptComplianceReplyFile = document.querySelector("#kptComplianceReplyFile");
const openKptRequestCount = document.querySelector("#openKptRequestCount");
const universityComplianceStatus = document.querySelector("#universityComplianceStatus");
const addUserButton = document.querySelector("#addUserButton");
const currentUserRole = document.querySelector("#currentUserRole");
const superAdminOnlyLinks = document.querySelectorAll("[data-superadmin-only]");
const addUserModal = document.querySelector("#addUserModal");
const closeAddUser = document.querySelector("#closeAddUser");
const cancelAddUser = document.querySelector("#cancelAddUser");
const submitAddUser = document.querySelector("#submitAddUser");
const userTableBody = document.querySelector("#userTableBody");
const auditTableBody = document.querySelector("#auditTableBody");
const kptRequestRows = document.querySelector("#kptRequestRows");
const auditSearch = document.querySelector("#auditSearch");
const auditUserFilter = document.querySelector("#auditUserFilter");
const auditActionFilter = document.querySelector("#auditActionFilter");
const auditEntityFilter = document.querySelector("#auditEntityFilter");
const auditDateFilter = document.querySelector("#auditDateFilter");
const auditApply = document.querySelector("#auditApply");
const helpTabButtons = document.querySelectorAll("[data-help-tab]");
const helpPanels = document.querySelectorAll("[data-help-panel]");
const supportIssueType = document.querySelector("#supportIssueType");
const supportPriority = document.querySelector("#supportPriority");
const supportSubject = document.querySelector("#supportSubject");
const supportMessage = document.querySelector("#supportMessage");
const submitSupportRequest = document.querySelector("#submitSupportRequest");
const settingsTabButtons = document.querySelectorAll("[data-settings-tab]");
const settingsPanels = document.querySelectorAll("[data-settings-panel]");
const settingsToggles = document.querySelectorAll(".settings-page input[type='checkbox']");
const settingsPasswordInputs = document.querySelectorAll(".settings-password-grid input");
const updatePasswordButton = document.querySelector("#updatePasswordButton");
const sessionList = document.querySelector(".session-list");
const newUserName = document.querySelector("#newUserName");
const newUserEmail = document.querySelector("#newUserEmail");
const newUserLogin = document.querySelector("#newUserLogin");
const newUserPassword = document.querySelector("#newUserPassword");
const newUserRole = document.querySelector("#newUserRole");
const newUserStatus = document.querySelector("#newUserStatus");
const backToApplications = document.querySelector("#backToApplications");
const applicationsPage = document.querySelector(".applications-page");
const applicationsFilterPanel = document.querySelector(".applications-filter-panel");
const applicationTableWrap = document.querySelector(".applications-table-wrap");
const applicationSidePanel = document.querySelector("#applicationSidePanel");
const paginationRow = document.querySelector(".pagination-row");
const tableOptionsPanel = document.querySelector(".table-options-panel");
const detailTabButtons = document.querySelectorAll("[data-detail-tab]");
const detailTabPanels = document.querySelectorAll("[data-detail-panel]");
let activeReviewStage = "";
let activeKptComplianceRow = null;
const documentRequestModal = document.querySelector("#documentRequestModal");
const documentRequestTitle = document.querySelector("#documentRequestTitle");
const documentRequestLabel = document.querySelector("#documentRequestLabel");
const documentRequestMessage = document.querySelector("#documentRequestMessage");
const sendDocumentRequest = document.querySelector("#sendDocumentRequest");
const closeDocumentRequest = document.querySelector("#closeDocumentRequest");
const cancelDocumentRequest = document.querySelector("#cancelDocumentRequest");
const statusConfirmModal = document.querySelector("#statusConfirmModal");
const statusConfirmTitle = document.querySelector("#statusConfirmTitle");
const statusConfirmMessage = document.querySelector("#statusConfirmMessage");
const applyStatusConfirm = document.querySelector("#applyStatusConfirm");
const closeStatusConfirm = document.querySelector("#closeStatusConfirm");
const cancelStatusConfirm = document.querySelector("#cancelStatusConfirm");
const offerLetterModal = document.querySelector("#offerLetterModal");
const offerLetterFile = document.querySelector("#offerLetterFile");
const offerLetterMessage = document.querySelector("#offerLetterMessage");
const sendOfferLetter = document.querySelector("#sendOfferLetter");
const closeOfferLetter = document.querySelector("#closeOfferLetter");
const cancelOfferLetter = document.querySelector("#cancelOfferLetter");
const previewModal = document.querySelector("#previewModal");
const previewTitle = document.querySelector("#previewTitle");
const previewBody = document.querySelector("#previewBody");
const closePreview = document.querySelector("#closePreview");
const donePreview = document.querySelector("#donePreview");
let applicationSort = { key: "", direction: "asc" };
let currentApplicationPage = 1;
let currentProgrammePage = 1;
let activeApplicantRow = null;
let currentApplicationOrder = [];
let activeProgrammeRow = null;
const programmeGalleryImages = new Map();
const initialProgrammeTableHtml = programmesTableBody?.innerHTML || "";
const initialUserTableHtml = userTableBody?.innerHTML || "";
const initialAuditTableHtml = auditTableBody?.innerHTML || "";
const initialKptRequestRowsHtml = kptRequestRows?.innerHTML || "";
const initialSettingsToggles = [...settingsToggles].map((toggle) => toggle.checked);
const initialSessionListHtml = sessionList?.innerHTML || "";
const initialProgrammeCreateFields = {
  activities: programmeActivities?.innerHTML || "",
  learningScopes: programmeLearningScopes?.innerHTML || ""
};
let pendingProgrammeStatusChange = null;
let pendingProgrammeDelete = null;
let pendingProgrammeAction = null;
let pendingProgrammeActionAudit = null;
let pendingDocumentAction = "";
let pendingStatusChange = null;
let pendingReminderAction = null;
let editingUserRow = null;

[
  documentRequestModal,
  offerLetterModal,
  previewModal
].forEach((modal) => {
  if (modal && modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }
});

function getSearchableItems() {
  return [...document.querySelectorAll(".view-panel.active [data-keywords]")];
}

function setActiveView(viewName) {
  navViewLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.viewLink === viewName);
  });
  viewPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.view === viewName);
  });
  if (pageTitle) {
    pageTitle.textContent = viewName === "applications" ? "Applications" : viewName === "programmes" ? "Programmes" : viewName === "reports" ? "Reports" : viewName === "university-profile" ? "University Profile" : viewName === "user-management" ? "User Management" : viewName === "audit-log" ? "Audit Log" : viewName === "help-support" ? "Help & Support" : viewName === "settings" ? "Settings" : "Dashboard";
  }
}

function scrollWorkspaceToTop() {
  document.querySelector(".workspace")?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function updateNotificationCount() {
  const unreadCount = document.querySelectorAll(".notification-item.unread").length;
  if (notificationCount) {
    notificationCount.textContent = String(unreadCount);
    notificationCount.hidden = unreadCount === 0;
  }
  if (notificationSummary) {
    notificationSummary.textContent = unreadCount ? `${unreadCount} unread updates` : "All caught up";
  }
}

function closeNotificationsPanel() {
  if (notificationPanel) notificationPanel.hidden = true;
  if (notificationButton) notificationButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("notification-open");
}

function toggleNotificationsPanel() {
  if (!notificationPanel || !notificationButton) return;
  const shouldOpen = notificationPanel.hidden;
  notificationPanel.hidden = !shouldOpen;
  notificationButton.setAttribute("aria-expanded", String(shouldOpen));
  document.body.classList.toggle("notification-open", shouldOpen);
}

function markNotificationsAsRead() {
  document.querySelectorAll(".notification-item.unread").forEach((item) => {
    item.classList.remove("unread");
  });
  updateNotificationCount();
}

function resetNotificationsDemoState() {
  document.querySelectorAll(".notification-item").forEach((item) => {
    item.classList.toggle("unread", item.dataset.defaultUnread === "true");
  });
  closeNotificationsPanel();
  updateNotificationCount();
}

function openNotificationTarget(target) {
  if (!target) return;
  setActiveView(target);
  if (target === "applications") {
    showApplicationsList();
  }
  if (target === "programmes") {
    showProgrammesList();
  }
  history.replaceState(null, "", `#${target}`);
  scrollWorkspaceToTop();
}

function showApplicationsList() {
  if (applicantDetail) applicantDetail.hidden = true;
  closeApplicationSidePanel();
  if (applicationTableWrap) applicationTableWrap.hidden = false;
  if (paginationRow) paginationRow.hidden = false;
  if (tableOptionsPanel) tableOptionsPanel.hidden = false;
  if (applicationsFilterPanel) applicationsFilterPanel.hidden = false;
  applicationsPage?.classList.remove("detail-mode");
}

function applyCurrentUserRole() {
  const isSuperAdmin = (currentUserRole?.value || "superadmin") === "superadmin";
  if (addUserButton) {
    addUserButton.hidden = !isSuperAdmin;
    addUserButton.dataset.currentRole = isSuperAdmin ? "superadmin" : "restricted";
  }
  document.querySelectorAll("[data-user-action]").forEach((button) => {
    button.disabled = !isSuperAdmin;
    button.title = isSuperAdmin ? "" : "Only Super Admin users can edit roles or change account access.";
  });
  superAdminOnlyLinks.forEach((link) => {
    link.hidden = !isSuperAdmin;
  });
  if (!isSuperAdmin && document.querySelector('[data-view="reports"]')?.classList.contains("active")) {
    setActiveView("dashboard");
    history.replaceState(null, "", "#dashboard");
    scrollWorkspaceToTop();
  }
}

function resetUserManagementDemoState() {
  if (userTableBody) userTableBody.innerHTML = initialUserTableHtml;
  if (currentUserRole) currentUserRole.value = "superadmin";
  closeAddUserModal();
  applyCurrentUserRole();
}

function updateAuditRows() {
  if (!auditTableBody) return;
  const query = (auditSearch?.value || "").trim().toLowerCase();
  const user = auditUserFilter?.value || "All users";
  const action = auditActionFilter?.value || "All actions";
  const entity = auditEntityFilter?.value || "All entities";
  const date = auditDateFilter?.value || "Any date";
  [...auditTableBody.rows].forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    const rowDate = row.children[0]?.textContent || "";
    const rowUser = row.children[1]?.textContent || "";
    const rowAction = row.children[2]?.textContent || "";
    const rowEntity = row.children[3]?.textContent || "";
    const matchesQuery = !query || rowText.includes(query);
    const matchesUser = user === "All users" || rowUser === user;
    const matchesAction = action === "All actions" || rowAction.toLowerCase().includes(action.toLowerCase());
    const matchesEntity = entity === "All entities" || rowEntity === entity;
    const matchesDate = date === "Any date" || rowDate.includes(date);
    row.hidden = !(matchesQuery && matchesUser && matchesAction && matchesEntity && matchesDate);
  });
}

function resetAuditDemoState() {
  if (auditTableBody) auditTableBody.innerHTML = initialAuditTableHtml;
  if (auditSearch) auditSearch.value = "";
  if (auditUserFilter) auditUserFilter.value = "All users";
  if (auditActionFilter) auditActionFilter.value = "All actions";
  if (auditEntityFilter) auditEntityFilter.value = "All entities";
  if (auditDateFilter) auditDateFilter.value = "Any date";
  updateAuditRows();
}

function resetKptComplianceState() {
  if (kptRequestRows) kptRequestRows.innerHTML = initialKptRequestRowsHtml;
  attachKptRequestActions();
  activeKptComplianceRow = null;
  closeKptComplianceReplyModal();
  updateKptRequestSummary();
}

function setActiveSettingsTab(tabName = "notifications") {
  settingsTabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.settingsTab === tabName);
  });
  settingsPanels.forEach((panel) => {
    panel.hidden = panel.dataset.settingsPanel !== tabName;
  });
}

function setActiveHelpTab(tabName = "overview") {
  helpTabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.helpTab === tabName);
  });
  helpPanels.forEach((panel) => {
    panel.hidden = panel.dataset.helpPanel !== tabName;
  });
}

function resetHelpDemoState() {
  setActiveHelpTab("overview");
  if (supportIssueType) supportIssueType.value = "Application workflow";
  if (supportPriority) supportPriority.value = "Normal";
  if (supportSubject) supportSubject.value = "";
  if (supportMessage) supportMessage.value = "";
}

function resetSettingsDemoState() {
  if (sessionList) sessionList.innerHTML = initialSessionListHtml;
  settingsToggles.forEach((toggle, index) => {
    toggle.checked = initialSettingsToggles[index];
  });
  settingsPasswordInputs.forEach((input) => {
    input.value = "";
  });
  setActiveSettingsTab("notifications");
}

function getCurrentAuditTimestamp() {
  const now = new Date();
  const date = now.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
  return `${date}, ${time}`;
}

function addAuditRecord({ user = "Nur Aisyah Rahman", action, entity }) {
  if (!auditTableBody) return;
  const row = document.createElement("tr");
  row.innerHTML = `<td>${getCurrentAuditTimestamp()}</td><td>${user}</td><td>${action}</td><td>${entity}</td>`;
  auditTableBody.prepend(row);
  updateAuditRows();
}

function updateKptRequestSummary() {
  const openRows = [...document.querySelectorAll("#kptRequestRows tr")].filter((row) => /pending reply/i.test(row.children[3]?.textContent || ""));
  if (openKptRequestCount) openKptRequestCount.textContent = String(openRows.length);
  if (universityComplianceStatus) {
    universityComplianceStatus.textContent = openRows.length ? "Action Required" : "Clear";
    universityComplianceStatus.className = openRows.length ? "status-chip amber" : "status-chip green";
  }
}

function openKptComplianceReply(row) {
  activeKptComplianceRow = row;
  if (kptComplianceReplyMessage) kptComplianceReplyMessage.value = "";
  if (kptComplianceReplyFile) kptComplianceReplyFile.value = "";
  if (kptComplianceReplyModal) kptComplianceReplyModal.hidden = false;
}

function closeKptComplianceReplyModal() {
  activeKptComplianceRow = null;
  if (kptComplianceReplyModal) kptComplianceReplyModal.hidden = true;
}

function sendKptComplianceReplyToKpt() {
  if (!activeKptComplianceRow) return;
  const requestName = activeKptComplianceRow.querySelector("strong")?.textContent.trim() || "KPT request";
  const message = kptComplianceReplyMessage?.value.trim() || "Updated document and clarification submitted for KPT review.";
  activeKptComplianceRow.children[3].innerHTML = '<span class="status-chip blue">Submitted to KPT</span>';
  activeKptComplianceRow.children[4].innerHTML = '<button class="submission-view-btn" type="button" data-kpt-request-action="view">View Reply</button>';
  activeKptComplianceRow.children[0].querySelector("small").textContent = "Submitted to KPT just now";
  addAuditRecord({ action: `Replied to KPT compliance request: ${requestName}`, entity: "University Profile" });
  addActivity(null, "KPT compliance reply sent", message);
  updateKptRequestSummary();
  closeKptComplianceReplyModal();
}

function getProgrammeAuditName() {
  return document.querySelector("#programmeDetailName")?.textContent.trim() || activeProgrammeRow?.children[0]?.textContent.trim() || "programme";
}

function getApplicationAuditName(row = activeApplicantRow) {
  const code = getRowCode(row);
  const name = getRowName(row);
  return code ? `${name} (${code})` : name;
}

function inferActionAudit(title = "") {
  const text = title.toLowerCase();
  if (text.includes("super admin required")) return null;
  if (text.includes("save profile")) return { entity: "University Profile", action: "Updated university profile details" };
  if (text.includes("submit support")) return { entity: "Support", action: "Submitted support request" };
  if (text.includes("update password")) return { entity: "Security", action: "Updated account password" };
  if (text.includes("revoke previous session")) return { entity: "Security", action: "Revoked previous login session" };
  if (text.includes("submit changes to kpt")) return { entity: "Programme", action: `Submitted requested changes for ${getProgrammeAuditName()} to KPT` };
  if (text.includes("save draft changes")) return { entity: "Programme", action: `Saved draft changes for ${getProgrammeAuditName()}` };
  if (text.includes("submit draft to kpt")) return { entity: "Programme", action: `Submitted draft programme ${getProgrammeAuditName()} to KPT` };
  if (text.includes("save this programme as draft") || text.includes("submit this programme to kpt")) return null;
  if (text.includes("save user changes") || text.includes("add this user")) return null;
  return null;
}

function setUniversityProfileEditing(isEditing, scope = "university") {
  const fieldSelector = scope === "contact" ? "#profileContactFields input" : "#universityProfileFields input, #universityProfileFields textarea";
  document.querySelectorAll(fieldSelector).forEach((field) => {
    field.disabled = !isEditing;
  });
  document.querySelectorAll(`[data-profile-actions="${scope}"]`).forEach((actions) => {
    actions.hidden = !isEditing;
  });
  if (scope === "contact") {
    if (editProfileContact) editProfileContact.hidden = isEditing;
    return;
  }
  if (editUniversityProfile) editUniversityProfile.hidden = isEditing;
  if (changeUniversityLogo) changeUniversityLogo.hidden = !isEditing;
}

function openAddUserModal() {
  if (addUserButton?.dataset.currentRole !== "superadmin") {
    openProgrammeActionConfirm("Super Admin required", "Only Super Admin users can add new staff accounts.", () => {}, "OK");
    return;
  }
  editingUserRow = null;
  document.querySelector("#addUserTitle").textContent = "Add User";
  if (submitAddUser) submitAddUser.textContent = "Add User";
  if (newUserName) newUserName.value = "";
  if (newUserEmail) newUserEmail.value = "";
  if (newUserLogin) newUserLogin.value = "";
  if (newUserPassword) newUserPassword.value = "";
  if (newUserRole) newUserRole.value = "University Admin";
  if (newUserStatus) newUserStatus.value = "Active";
  if (addUserModal) addUserModal.hidden = false;
}

function closeAddUserModal() {
  if (addUserModal) addUserModal.hidden = true;
  editingUserRow = null;
}

function getUserRowStatus(row) {
  return row?.children[3]?.textContent.trim() || "Active";
}

function setUserRowValues(row, { name, email, role, status }) {
  if (!row) return;
  row.children[0].innerHTML = `<strong>${name}</strong>`;
  row.children[1].textContent = email;
  row.children[2].textContent = role;
  row.children[3].innerHTML = status === "Active" ? '<span class="status-chip green">Active</span>' : '<span class="status-chip neutral">Inactive</span>';
  row.children[6].innerHTML = '<button type="button" data-user-action="edit">Edit</button>';
  applyCurrentUserRole();
}

function openEditUserModal(row) {
  if (!row) return;
  editingUserRow = row;
  document.querySelector("#addUserTitle").textContent = "Edit User";
  if (submitAddUser) submitAddUser.textContent = "Save Changes";
  if (newUserName) newUserName.value = row.children[0]?.textContent.trim() || "";
  if (newUserEmail) newUserEmail.value = row.children[1]?.textContent.trim() || "";
  if (newUserLogin) newUserLogin.value = (row.children[1]?.textContent.trim() || "").split("@")[0] || "";
  if (newUserPassword) newUserPassword.value = "";
  if (newUserRole) newUserRole.value = row.children[2]?.textContent.trim() || "University Admin";
  if (newUserStatus) newUserStatus.value = getUserRowStatus(row);
  if (addUserModal) addUserModal.hidden = false;
}

function addUserRow() {
  if (!userTableBody) return;
  const name = newUserName?.value.trim() || "New Staff User";
  const email = newUserEmail?.value.trim() || "staff@cyberjaya.edu.my";
  const role = newUserRole?.value || "University Admin";
  const status = newUserStatus?.value || "Active";
  if (editingUserRow) {
    const previousRole = editingUserRow.children[2]?.textContent.trim() || "";
    const previousStatus = getUserRowStatus(editingUserRow);
    setUserRowValues(editingUserRow, { name, email, role, status });
    addAuditRecord({
      action: `Edited ${name}: ${previousRole} / ${previousStatus} -> ${role} / ${status}`,
      entity: "User"
    });
    closeAddUserModal();
    return;
  }
  const row = document.createElement("tr");
  row.innerHTML = `<td><strong>${name}</strong></td><td>${email}</td><td>${role}</td><td>${status === "Active" ? '<span class="status-chip green">Active</span>' : '<span class="status-chip neutral">Inactive</span>'}</td><td>Never</td><td>16 Aug 2026</td><td><button type="button" data-user-action="edit">Edit</button></td>`;
  userTableBody.prepend(row);
  addAuditRecord({
    action: `Added ${name} as ${role} / ${status}`,
    entity: "User"
  });
  applyCurrentUserRole();
  if (newUserName) newUserName.value = "";
  if (newUserEmail) newUserEmail.value = "";
  if (newUserLogin) newUserLogin.value = "";
  if (newUserPassword) newUserPassword.value = "";
  if (newUserStatus) newUserStatus.value = "Active";
  closeAddUserModal();
}

navViewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveView(link.dataset.viewLink);
    if (link.dataset.viewLink === "applications") {
      showApplicationsList();
    }
    if (link.dataset.viewLink === "programmes") {
      showProgrammesList();
    }
    scrollWorkspaceToTop();
    history.replaceState(null, "", link.getAttribute("href"));
  });
});

notificationButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleNotificationsPanel();
});

notificationPanel?.addEventListener("click", (event) => {
  event.stopPropagation();
  const item = event.target.closest(".notification-item");
  if (!item) return;
  item.classList.remove("unread");
  updateNotificationCount();
  closeNotificationsPanel();
  openNotificationTarget(item.dataset.notificationTarget);
});

markNotificationsRead?.addEventListener("click", (event) => {
  event.stopPropagation();
  markNotificationsAsRead();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".notification-wrap")) {
    closeNotificationsPanel();
  }
});

if (location.hash === "#applications" || location.hash === "#programmes" || location.hash === "#reports" || location.hash === "#university-profile" || location.hash === "#user-management" || location.hash === "#audit-log" || location.hash === "#help-support" || location.hash === "#settings") {
  setActiveView(location.hash.slice(1));
  scrollWorkspaceToTop();
}
applyCurrentUserRole();
updateAuditRows();
setActiveHelpTab("overview");
setActiveSettingsTab("notifications");
updateNotificationCount();

function getProgrammeApplicantCount(programmeName) {
  const targetProgramme = programmeName.toLowerCase();
  return [...applicationRows].filter((row) => row.dataset.programme === targetProgramme).length;
}

function shouldShowProgrammeApplicants(status) {
  return ["live", "archived", "resubmitted"].includes(status);
}

function syncProgrammeApplicantCounts() {
  programmeRows.forEach((row) => {
    const programmeName = row.querySelector(".programme-name")?.textContent.trim() || "";
    const status = row.dataset.publicStatus || "";
    const applicantCell = row.children[4];
    if (!applicantCell) return;
    applicantCell.textContent = shouldShowProgrammeApplicants(status) ? String(getProgrammeApplicantCount(programmeName)) : "-";
  });
}

function updateProgrammeRows() {
  syncProgrammeApplicantCounts();
  const status = programmePublicStatusFilter?.value.toLowerCase() || "all statuses";
  const pageSize = programmesPerPage?.value || "10";
  const limit = pageSize === "all" ? Infinity : Number(pageSize);
  const matchedRows = [];

  programmeRows.forEach((row) => {
    const matchesStatus = status === "all statuses" || row.dataset.publicStatus === status;
    row.hidden = true;
    if (matchesStatus) matchedRows.push(row);
  });

  const totalPages = limit === Infinity ? 1 : Math.max(1, Math.ceil(matchedRows.length / limit));
  currentProgrammePage = Math.min(currentProgrammePage, totalPages);
  const start = limit === Infinity ? 0 : (currentProgrammePage - 1) * limit;
  const end = limit === Infinity ? matchedRows.length : start + limit;

  matchedRows.slice(start, end).forEach((row) => {
    row.hidden = false;
  });

  if (programmesSummary) {
    const shownStart = matchedRows.length ? start + 1 : 0;
    const shownEnd = Math.min(end, matchedRows.length);
    programmesSummary.textContent = `Showing ${shownStart}-${shownEnd} of ${matchedRows.length} programmes`;
  }
  if (programmePaginationSummary) {
    const shownStart = matchedRows.length ? start + 1 : 0;
    const shownEnd = Math.min(end, matchedRows.length);
    programmePaginationSummary.textContent = `Showing ${shownStart}-${shownEnd} of ${matchedRows.length}`;
  }
  if (programmePageIndicator) {
    programmePageIndicator.textContent = `Page ${currentProgrammePage} of ${totalPages}`;
  }
  if (prevProgrammePage) {
    prevProgrammePage.disabled = currentProgrammePage <= 1;
  }
  if (nextProgrammePage) {
    nextProgrammePage.disabled = currentProgrammePage >= totalPages;
  }
}

function resetProgrammeCreateForm() {
  if (createProgrammeName) createProgrammeName.value = "";
  if (createProgrammeOverview) createProgrammeOverview.value = "";
  if (createProgrammeDuration) createProgrammeDuration.value = "";
  if (createProgrammeCurrency) createProgrammeCurrency.value = "USD";
  if (createProgrammeFee) createProgrammeFee.value = "";
  if (createProgrammeLanguage) createProgrammeLanguage.value = "Select required language proficiency";
  if (createProgrammeCredit) createProgrammeCredit.checked = false;
  if (createProgrammeTarget) createProgrammeTarget.value = "Select target group";
  if (createProgrammeGallery) createProgrammeGallery.value = "";
  if (programmeGalleryCount) programmeGalleryCount.textContent = "No images selected";
  if (programmeActivities) programmeActivities.innerHTML = initialProgrammeCreateFields.activities;
  if (programmeLearningScopes) programmeLearningScopes.innerHTML = initialProgrammeCreateFields.learningScopes;
}

function resetProgrammesDemoState() {
  const activeProgrammeName = programmeDetail?.hidden ? "" : document.querySelector("#programmeDetailName")?.textContent.trim();
  if (programmesTableBody) {
    programmesTableBody.innerHTML = initialProgrammeTableHtml;
  }
  programmeRows = document.querySelectorAll(".programmes-table tbody tr");
  programmeRows.forEach((row) => {
    attachProgrammeRowActions(row);
    row.hidden = false;
  });
  programmeGalleryImages.clear();
  pendingProgrammeDelete = null;
  pendingProgrammeAction = null;
  pendingProgrammeActionAudit = null;
  pendingProgrammeStatusChange = null;
  resetProgrammeCreateForm();
  if (programmePublicStatusFilter) programmePublicStatusFilter.value = "All statuses";
  if (programmesPerPage) programmesPerPage.value = "10";
  currentProgrammePage = 1;
  updateProgrammeRows();

  if (activeProgrammeName && programmeDetail && !programmeDetail.hidden) {
    const restoredRow = [...programmeRows].find((row) => row.querySelector(".programme-name")?.textContent.trim() === activeProgrammeName);
    if (restoredRow) {
      showProgrammeDetail(restoredRow);
      return;
    }
  }
  activeProgrammeRow = null;
  showProgrammesList();
}

function showProgrammeCreateForm() {
  if (programmesControlPanel) programmesControlPanel.hidden = true;
  if (programmesTableWrap) programmesTableWrap.hidden = true;
  if (programmePaginationRow) programmePaginationRow.hidden = true;
  if (programmeDetail) programmeDetail.hidden = true;
  if (programmeCreatePanel) programmeCreatePanel.hidden = false;
}

function showProgrammesList() {
  if (programmesControlPanel) programmesControlPanel.hidden = false;
  if (programmesTableWrap) programmesTableWrap.hidden = false;
  if (programmePaginationRow) programmePaginationRow.hidden = false;
  if (programmeCreatePanel) programmeCreatePanel.hidden = true;
  if (programmeDetail) programmeDetail.hidden = true;
}

function attachProgrammeRowActions(row) {
  row.querySelector('[aria-label="View programme"]')?.addEventListener("click", () => {
    showProgrammeDetail(row);
  });
}

function getCreateProgrammeData(status) {
  const feeValue = createProgrammeFee?.value.trim() || "0";
  const currency = createProgrammeCurrency?.value || "MYR";
  const fee = currency === "MYR" ? `RM ${feeValue}` : `${currency} ${feeValue}`;
  const activities = [...(programmeActivities?.querySelectorAll("input") || [])].map((input) => input.value.trim()).filter(Boolean);
  const outcomes = [...(programmeLearningScopes?.querySelectorAll("input") || [])].map((input) => input.value.trim()).filter(Boolean);
  return {
    name: createProgrammeName?.value.trim() || "Untitled Programme",
    overview: createProgrammeOverview?.value.trim() || "Programme overview appears here.",
    duration: createProgrammeDuration?.value.trim() || "30 Days",
    fee,
    language: createProgrammeLanguage?.value || "English",
    credit: createProgrammeCredit?.checked ? "Eligible" : "Not eligible",
    target: createProgrammeTarget?.value === "Select target group" ? "General Public (including student)" : createProgrammeTarget?.value || "General Public (including student)",
    activities: activities.length ? activities.join(", ") : "Activity 1, Activity 2",
    outcome: outcomes.length ? outcomes.join(", ") : "Learning outcome 1",
    status
  };
}

function createProgrammeRow(status) {
  const data = getCreateProgrammeData(status);
  const normalizedStatus = status.toLowerCase();
  const chipClass = normalizedStatus === "draft" ? "status-chip neutral" : "status-chip amber";
  const tbody = document.querySelector(".programmes-table tbody");
  if (!tbody) return;
  const row = document.createElement("tr");
  row.dataset.programmeCategory = "custom programme";
  row.dataset.publicStatus = normalizedStatus;
  row.dataset.overview = data.overview;
  row.dataset.language = data.language;
  row.dataset.credit = data.credit;
  row.dataset.target = data.target;
  row.dataset.activities = data.activities;
  row.dataset.outcome = data.outcome;
  row.innerHTML = `<td><span class="programme-name">${data.name}</span></td><td>Custom Programme</td><td>${data.duration}</td><td>${data.fee}</td><td>-</td><td><span class="${chipClass}">${status}</span></td><td><button class="submission-view-btn" type="button" aria-label="View programme">View</button></td>`;
  tbody.prepend(row);
  programmeRows = document.querySelectorAll(".programmes-table tbody tr");
  attachProgrammeRowActions(row);
  if (createProgrammeGallery?.files?.length) {
    programmeGalleryImages.set(data.name, [...createProgrammeGallery.files].map((file) => URL.createObjectURL(file)));
  }
  updateProgrammeRows();
  addAuditRecord({ action: `${status === "Draft" ? "Created draft programme" : "Submitted programme to KPT"}: ${data.name}`, entity: "Programme" });
  showProgrammesList();
}

function showProgrammeDetail(row) {
  if (!row) return;
  activeProgrammeRow = row;
  const cells = row.children;
  const name = row.querySelector(".programme-name")?.textContent.trim() || "Programme";
  const category = cells[1]?.textContent.trim() || "";
  const duration = cells[2]?.textContent.trim() || "";
  const fee = cells[3]?.textContent.trim() || "";
  const applicants = cells[4]?.textContent.trim() || "0";
  const statusChip = cells[5]?.querySelector(".status-chip");
  const status = statusChip?.textContent.trim() || "";
  const chipClass = statusChip?.className || "status-chip neutral";
  const normalizedStatus = status.toLowerCase();
  const summaries = {
    "Tropical Biodiversity Programme": "Tropical Biodiversity Programme introduces participants to Malaysian academic, cultural, and industry learning through a structured short programme.",
    "Malay Language & Culture": "Malay Language & Culture builds practical language confidence through cultural activities, guided lessons, and local engagement.",
    "Digital Entrepreneurship Bootcamp": "Digital Entrepreneurship Bootcamp helps participants develop business ideas, validate markets, and present a digital venture concept.",
    "Malaysian Heritage Experience": "Malaysian Heritage Experience combines museum visits, community learning, and reflective cultural study.",
    "Sustainable Cities Programme": "Sustainable Cities Programme explores urban planning, smart mobility, and sustainability challenges in Malaysian cities."
  };
  const customOverview = row.dataset.overview;
  setText("#programmeDetailName", name);
  setText("#programmeDetailMeta", `${duration}   ${fee}`);
  setText("#programmeDetailSummary", customOverview || summaries[name] || `${name} introduces participants to academic, cultural, and industry learning through a structured short programme.`);
  setText("#programmeDetailCategory", category);
  setText("#programmeDetailDuration", duration);
  setText("#programmeDetailFee", fee);
  setText("#programmeDetailApplicants", applicants);
  setText("#programmeDetailStatusText", status);
  setText("#programmeDetailTarget", row.dataset.target || (applicants === "0" ? "Group" : "General Public (including student)"));
  setText("#programmeDetailCredit", row.dataset.credit || (category.toLowerCase().includes("business") ? "Not eligible" : "Eligible"));
  setText("#programmeDetailLanguage", row.dataset.language || (category.toLowerCase().includes("language") ? "Malay" : "English"));
  setText("#programmeDetailOutcome", row.dataset.outcome || "Participants complete guided activities, site visits, and a reflective project assessed by university facilitators.");
  setText("#programmeDetailActivities", row.dataset.activities || "Activity 1, Activity 2, guided site visit");
  setText("#programmeDetailsOverview", customOverview || summaries[name] || `${name} introduces participants to academic, cultural, and industry learning through a structured short programme.`);
  setText("#programmeDetailsLanguage", row.dataset.language || (category.toLowerCase().includes("language") ? "Malay" : "English"));
  setText("#programmeDetailsTarget", row.dataset.target || (applicants === "-" ? "Group" : "General Public (including student)"));
  setText("#programmeDetailsCredit", row.dataset.credit || (category.toLowerCase().includes("business") ? "Not eligible" : "Eligible"));
  setText("#programmeDetailsActivities", row.dataset.activities || "Activity 1, Activity 2, guided site visit");
  renderProgrammeGallery(name);
  setText("#programmeApplicationsStatus", normalizedStatus === "live" ? "Accepting applications" : "Historical applications only");
  const detailStatus = document.querySelector("#programmeDetailStatus");
  if (detailStatus) {
    detailStatus.className = chipClass;
    detailStatus.textContent = status;
  }
  renderProgrammeStatusNotice(normalizedStatus);
  renderProgrammeDetailTabs(normalizedStatus);
  renderProgrammeApplications(name);
  renderProgrammeHistoryTimeline(normalizedStatus);
  renderProgrammeManagementActions(normalizedStatus);
  setProgrammeDetailsEditing(false, normalizedStatus);
  setActiveProgrammeTab("overview");
  if (programmesControlPanel) programmesControlPanel.hidden = true;
  if (programmesTableWrap) programmesTableWrap.hidden = true;
  if (programmePaginationRow) programmePaginationRow.hidden = true;
  if (programmeCreatePanel) programmeCreatePanel.hidden = true;
  if (programmeDetail) programmeDetail.hidden = false;
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function renderProgrammeManagementActions(status) {
  if (!programmeManagementActions) return;
  const actions = {
    live: [
      { label: "Archive programme", status: "Archived", chipClass: "status-chip neutral", title: "Archive this programme?", message: "This will archive the programme and keep its historical applications available for review.", tone: "danger" }
    ],
    draft: [
      { label: "Delete draft", delete: true, title: "Delete this draft?", message: "This will remove the draft programme from the prototype table.", tone: "danger" }
    ]
  }[status] || [];

  programmeManagementActions.innerHTML = "";
  actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = action.label;
    if (action.tone) button.dataset.tone = action.tone;
    button.addEventListener("click", () => {
      if (action.delete) {
        openProgrammeDeleteConfirm(action.title, action.message);
        return;
      }
      openProgrammeStatusConfirm(action.status, action.chipClass, action.title, action.message);
    });
    programmeManagementActions.appendChild(button);
  });
  programmeManagementActions.hidden = actions.length === 0;
}

function updateActiveProgrammeStatus(status, chipClass = "status-chip amber") {
  if (!activeProgrammeRow) return;
  const normalizedStatus = status.toLowerCase();
  const statusCell = activeProgrammeRow.children[5];
  activeProgrammeRow.dataset.publicStatus = normalizedStatus;
  if (statusCell) {
    statusCell.innerHTML = `<span class="${chipClass}">${status}</span>`;
  }
  const detailStatus = document.querySelector("#programmeDetailStatus");
  if (detailStatus) {
    detailStatus.className = chipClass;
    detailStatus.textContent = status;
  }
  setText("#programmeDetailStatusText", status);
  renderProgrammeStatusNotice(normalizedStatus);
  renderProgrammeDetailTabs(normalizedStatus);
  renderProgrammeHistoryTimeline(normalizedStatus);
  renderProgrammeManagementActions(normalizedStatus);
  setProgrammeDetailsEditing(false, normalizedStatus);
  updateProgrammeRows();
}

function openProgrammeStatusConfirm(status, chipClass, title, message) {
  pendingProgrammeStatusChange = { status, chipClass };
  pendingProgrammeDelete = null;
  pendingProgrammeActionAudit = { entity: "Programme", action: `Changed ${getProgrammeAuditName()} status to ${status}` };
  pendingStatusChange = null;
  if (statusConfirmTitle) statusConfirmTitle.textContent = title;
  if (statusConfirmMessage) statusConfirmMessage.textContent = message;
  if (applyStatusConfirm) applyStatusConfirm.textContent = "Confirm";
  if (statusConfirmModal) statusConfirmModal.hidden = false;
}

function openProgrammeDeleteConfirm(title, message) {
  pendingProgrammeDelete = activeProgrammeRow;
  pendingProgrammeStatusChange = null;
  pendingProgrammeAction = null;
  pendingProgrammeActionAudit = { entity: "Programme", action: `Deleted draft programme ${getProgrammeAuditName()}` };
  pendingStatusChange = null;
  if (statusConfirmTitle) statusConfirmTitle.textContent = title;
  if (statusConfirmMessage) statusConfirmMessage.textContent = message;
  if (applyStatusConfirm) applyStatusConfirm.textContent = "Delete";
  if (statusConfirmModal) statusConfirmModal.hidden = false;
}

function openProgrammeActionConfirm(title, message, action, confirmLabel = "Confirm") {
  pendingProgrammeAction = action;
  pendingProgrammeActionAudit = inferActionAudit(title);
  pendingProgrammeDelete = null;
  pendingProgrammeStatusChange = null;
  pendingStatusChange = null;
  if (statusConfirmTitle) statusConfirmTitle.textContent = title;
  if (statusConfirmMessage) statusConfirmMessage.textContent = message;
  if (applyStatusConfirm) applyStatusConfirm.textContent = confirmLabel;
  if (statusConfirmModal) statusConfirmModal.hidden = false;
}

function deleteActiveProgrammeDraft() {
  if (!pendingProgrammeDelete) return;
  pendingProgrammeDelete.remove();
  pendingProgrammeDelete = null;
  activeProgrammeRow = null;
  programmeRows = document.querySelectorAll(".programmes-table tbody tr");
  updateProgrammeRows();
  showProgrammesList();
}

function applyRequestedProgrammeChanges() {
  setText("#programmeDetailFee", requestedProgrammeFee?.value.trim() || "RM 1,800");
  setText("#programmeDetailsCredit", document.querySelector("#programmeDetailsCredit")?.textContent.trim() || "Eligible");
  setText("#programmeDetailOutcome", requestedProgrammeLearning?.value.trim() || "Participants complete guided activities, site visits, and a reflective project assessed by university facilitators.");
  setText("#programmeDetailsTarget", requestedProgrammeTarget?.value || "General Public (including student)");
  setText("#programmeDetailTarget", requestedProgrammeTarget?.value || "General Public (including student)");
  closeRequestedChangesModal();
  updateActiveProgrammeStatus("Pending KPT Approval", "status-chip amber");
}

function applyDraftProgrammeEdits() {
  setText("#programmeDetailName", draftProgrammeName?.value.trim() || "Programme");
  setText("#programmeDetailSummary", draftProgrammeOverview?.value.trim() || "Programme overview appears here.");
  setText("#programmeDetailsOverview", draftProgrammeOverview?.value.trim() || "Programme overview appears here.");
  setText("#programmeDetailDuration", draftProgrammeDuration?.value.trim() || "28 Days");
  setText("#programmeDetailFee", draftProgrammeFee?.value.trim() || "RM 3,900");
  setText("#programmeDetailTarget", draftProgrammeTarget?.value || "General Public (including student)");
  setText("#programmeDetailsTarget", draftProgrammeTarget?.value || "General Public (including student)");
  setText("#programmeDetailOutcome", draftProgrammeLearning?.value.trim() || "Participants complete guided activities, site visits, and a reflective project assessed by university facilitators.");
  closeDraftProgrammeModal();
}

function renderProgrammeApplications(programmeName) {
  if (!programmeApplicationsRows) return;
  const targetProgramme = programmeName.toLowerCase();
  const matchedRows = [...applicationRows].filter((row) => row.dataset.programme === targetProgramme);
  setText("#programmeApplicationsTotal", `Showing ${matchedRows.length} related applicant${matchedRows.length === 1 ? "" : "s"}`);
  if (!matchedRows.length) {
    programmeApplicationsRows.innerHTML = `
      <tr>
        <td colspan="6">No applicants found for this programme.</td>
      </tr>
    `;
    return;
  }
  programmeApplicationsRows.innerHTML = matchedRows.map((row, index) => {
    const cells = row.children;
    return `
      <tr data-source-index="${[...applicationRows].indexOf(row)}">
        <td>${cells[0]?.innerHTML || ""}</td>
        <td>${cells[1]?.innerHTML || ""}</td>
        <td>${cells[2]?.innerHTML || ""}</td>
        <td>${cells[3]?.innerHTML || ""}</td>
        <td>${cells[4]?.innerHTML || ""}</td>
        <td>${cells[6]?.innerHTML || ""}</td>
      </tr>
    `;
  }).join("");
  programmeApplicationsRows.querySelectorAll("tr").forEach((tableRow) => {
    const sourceRow = applicationRows[Number(tableRow.dataset.sourceIndex)];
    tableRow.querySelector(".applicant-link")?.addEventListener("click", (event) => {
      event.preventDefault();
      showApplicantDetail(sourceRow);
    });
  });
}

function renderProgrammeGallery(programmeName) {
  const images = programmeGalleryImages.get(programmeName) || [];
  document.querySelectorAll(".programme-gallery-grid > div").forEach((card, index) => {
    const thumb = card.querySelector(".gallery-thumb");
    const label = card.querySelector("small");
    if (images[index] && thumb) {
      thumb.style.backgroundImage = `url("${images[index]}")`;
      thumb.style.backgroundSize = "cover";
      thumb.style.backgroundPosition = "center";
      if (label) label.textContent = "Uploaded image";
    } else if (thumb) {
      thumb.style.backgroundImage = "";
      thumb.style.backgroundSize = "";
      thumb.style.backgroundPosition = "";
      if (label) label.textContent = "Placeholder image";
    }
  });
}

function canEditProgrammeDetails(status) {
  return ["approved", "live", "archived", "draft", "changes requested"].includes(status);
}

function setProgrammeDetailsEditing(isEditing, status = programmeDetail?.dataset.programmeStatus || "") {
  const editable = canEditProgrammeDetails(status);
  const detailsPanel = document.querySelector("#programmeDetail .programme-tab-panel[data-programme-panel='details']");
  const activeEditing = editable && isEditing;
  if (programmeDetail) programmeDetail.dataset.programmeStatus = status;
  detailsPanel?.classList.toggle("is-editing", activeEditing);
  detailsPanel?.querySelectorAll(".detail-fields strong").forEach((field) => {
    field.contentEditable = activeEditing ? "true" : "false";
    field.spellcheck = activeEditing;
  });
  if (editProgrammeDetails) editProgrammeDetails.hidden = !editable || activeEditing;
  if (cancelProgrammeDetailsEdit) cancelProgrammeDetailsEdit.hidden = !activeEditing;
  if (saveProgrammeDetails) saveProgrammeDetails.hidden = !activeEditing;
}

function openProgrammeChangesModal() {
  if (programmeChangesModal) programmeChangesModal.hidden = false;
}

function closeProgrammeChangesModal() {
  if (programmeChangesModal) programmeChangesModal.hidden = true;
}

function openRequestedChangesModal(mode = "changes requested") {
  const rejected = mode === "rejected";
  if (requestedChangesTitle) requestedChangesTitle.textContent = rejected ? "Edit rejected programme" : "Edit requested changes";
  if (requestedProgrammeFeeNote) requestedProgrammeFeeNote.textContent = rejected ? "Rejected reason: Fee justification was not strong enough for the submitted scope." : "Fee needs clarification. KPT requested a clearer fee amount and currency.";
  if (requestedProgrammeLearningNote) requestedProgrammeLearningNote.textContent = rejected ? "Rejected reason: Learning outcomes did not show measurable academic value." : "Learning outcomes are too broad. Add a measurable outcome for participants.";
  if (requestedProgrammeTargetNote) requestedProgrammeTargetNote.textContent = rejected ? "Rejected reason: Target group and activities were not aligned with the programme objectives." : "Target group must match the programme audience submitted to KPT.";
  if (requestedProgrammeFee) requestedProgrammeFee.value = document.querySelector("#programmeDetailFee")?.textContent.trim() || "";
  if (requestedProgrammeLearning) requestedProgrammeLearning.value = document.querySelector("#programmeDetailOutcome")?.textContent.trim() || "";
  if (requestedProgrammeTarget) requestedProgrammeTarget.value = document.querySelector("#programmeDetailTarget")?.textContent.trim() || "General Public (including student)";
  if (requestedChangesModal) requestedChangesModal.dataset.mode = mode;
  if (requestedChangesModal) requestedChangesModal.hidden = false;
}

function closeRequestedChangesModal() {
  if (requestedChangesModal) requestedChangesModal.hidden = true;
}

function openDraftProgrammeModal() {
  if (draftProgrammeName) draftProgrammeName.value = document.querySelector("#programmeDetailName")?.textContent.trim() || "";
  if (draftProgrammeOverview) draftProgrammeOverview.value = document.querySelector("#programmeDetailsOverview")?.textContent.trim() || "";
  if (draftProgrammeDuration) draftProgrammeDuration.value = document.querySelector("#programmeDetailDuration")?.textContent.trim() || "";
  if (draftProgrammeFee) draftProgrammeFee.value = document.querySelector("#programmeDetailFee")?.textContent.trim() || "";
  if (draftProgrammeTarget) draftProgrammeTarget.value = document.querySelector("#programmeDetailTarget")?.textContent.trim() || "General Public (including student)";
  if (draftProgrammeLearning) draftProgrammeLearning.value = document.querySelector("#programmeDetailOutcome")?.textContent.trim() || "";
  if (draftProgrammeModal) draftProgrammeModal.hidden = false;
}

function closeDraftProgrammeModal() {
  if (draftProgrammeModal) draftProgrammeModal.hidden = true;
}

function openKptNoticeModal(status) {
  const programmeName = document.querySelector("#programmeDetailName")?.textContent.trim() || "Programme";
  const details = {
    "pending kpt approval": {
      title: "Submission sent to KPT",
      rows: [
        ["Programme", programmeName],
        ["Submitted", "10 Aug 2026 by University Admin"],
        ["Current KPT state", "Waiting for KPT review"],
        ["Submitted items", "Overview, fees, learning scope, activities, gallery, target group"],
        ["KPT note", "Submission received. KPT review is pending before this programme can open for applications."]
      ]
    },
    resubmitted: {
      title: "Post-approval changes resubmitted",
      rows: [
        ["Programme", programmeName],
        ["First approved", "13 Aug 2026 by KPT Demo"],
        ["Resubmitted", "17 Aug 2026 by University Admin"],
        ["Changed items", "Fee display, programme overview, and learning scope"],
        ["KPT note", "Post-approval changes are being reviewed. Existing application history remains available."]
      ]
    },
    rejected: {
      title: "KPT rejection details",
      rows: [
        ["Programme", programmeName],
        ["Rejected", "13 Aug 2026 by KPT Demo"],
        ["Reason", "Programme scope and assessment evidence did not meet approval requirements."],
        ["KPT note", "This rejected submission cannot be edited. The university must prepare a new programme submission."],
        ["Next suggested action", "Create a new programme with clearer learning outcomes, fee justification, and activity evidence."]
      ]
    },
    draft: {
      title: "Draft submission checklist",
      rows: [
        ["Programme", programmeName],
        ["Draft created", "13 Aug 2026 by University Admin"],
        ["Missing before submission", "Complete overview, fee, learning scope, gallery, target group, and activities."],
        ["KPT note", "This programme has not been submitted to KPT yet."],
        ["Next suggested action", "Complete the required fields and submit to KPT for approval."]
      ]
    }
  };
  const item = details[status] || {
    title: "Programme status details",
    rows: [
      ["Programme", programmeName],
      ["Status", status || "Not available"],
      ["Note", "No additional KPT message has been added for this prototype status."]
    ]
  };
  if (kptNoticeTitle) kptNoticeTitle.textContent = item.title;
  if (kptNoticeBody) {
    kptNoticeBody.innerHTML = item.rows.map(([label, value]) => `
      <div>
        <span>${label}</span>
        <strong>${value}</strong>
      </div>
    `).join("");
  }
  if (kptNoticeModal) kptNoticeModal.hidden = false;
}

function closeKptNoticeModal() {
  if (kptNoticeModal) kptNoticeModal.hidden = true;
}

function setActiveProgrammeTab(tabName = "overview") {
  programmeDetailTabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.programmeTab === tabName);
  });
  programmeDetailPanels.forEach((panel) => {
    const active = panel.dataset.programmePanel === tabName;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
}

function renderProgrammeDetailTabs(status) {
  const postApproval = ["approved", "live", "archived", "resubmitted"].includes(status);
  programmeDetailTabButtons.forEach((button) => {
    const tab = button.dataset.programmeTab;
    const visible = tab === "overview" || tab === "details" || (status === "resubmitted" ? ["approval", "applications", "history"].includes(tab) : (postApproval ? ["applications", "history"].includes(tab) : tab === "approval"));
    button.hidden = !visible;
  });
  renderProgrammeApprovalTimeline(status);
}

function renderProgrammeHistoryTimeline(status) {
  const timeline = document.querySelector("#programmeHistoryTimeline");
  const programmeName = document.querySelector("#programmeDetailName")?.textContent.trim() || "Programme";
  const baseItems = [
    {
      title: "Programme created",
      date: "8 Aug 2026 by University Admin",
      body: `${programmeName} was created as a university programme draft.`
    },
    {
      title: "Programme submitted to KPT",
      date: "10 Aug 2026 by University Admin",
      body: "Programme details, fees, learning scope, activities, and gallery were submitted for KPT review."
    },
    {
      title: "KPT approved the programme",
      date: "13 Aug 2026 by KPT Demo",
      body: "The programme received KPT approval and became eligible for publishing."
    }
  ];
  const statusItems = {
    resubmitted: [
      {
        title: "Programme details edited after approval",
        date: "16 Aug 2026 by University Admin",
        body: "The university updated approved programme details and prepared the changes for KPT confirmation."
      },
      {
        title: "Changes resubmitted to KPT",
        date: "17 Aug 2026 by University Admin",
        body: "The post-approval changes were submitted to KPT while historical applications remain available."
      }
    ],
    approved: [
      {
        title: "KPT approval granted",
        date: "13 Aug 2026 by KPT Demo",
        body: "The programme is approved. KPT will launch it when it is ready to open for public applications."
      }
    ],
    live: [
      {
        title: "Programme launched",
        date: "13 Aug 2026 by KPT Demo",
        body: "KPT launched the programme and applications were opened."
      }
    ],
    archived: [
      {
        title: "Programme launched",
        date: "13 Aug 2026 by KPT Demo",
        body: "KPT launched the programme and applications were opened."
      },
      {
        title: "Programme archived",
        date: "17 Aug 2026 by University Admin",
        body: "The programme was archived after its intake period. Historical applicant records remain available."
      }
    ]
  };
  const items = [...baseItems, ...(statusItems[status] || [])];
  if (!timeline) return;
  timeline.innerHTML = [...items].reverse().map((item) => `
    <div class="activity-item">
      <strong>${item.title}</strong>
      <span>${item.date}</span>
      <p>${item.body}</p>
    </div>
  `).join("");
}

function renderProgrammeApprovalTimeline(status) {
  const timeline = document.querySelector("#programmeApprovalTimeline");
  const programmeName = document.querySelector("#programmeDetailName")?.textContent.trim() || "Programme";
  const submittedItem = {
    title: "Programme submitted to KPT",
    date: "10 Aug 2026 by University Admin",
    body: `${programmeName} was submitted for KPT approval with programme overview, fees, learning scope, activities, and gallery details.`
  };
  const timelineItems = {
    "pending kpt approval": [
      submittedItem,
      {
        title: "Waiting for KPT review",
        date: "13 Aug 2026 by KPT Demo",
        body: "KPT has received the submission. No public applications can open until approval is granted."
      }
    ],
    "changes requested": [
      submittedItem,
      {
        title: "KPT requested changes",
        date: "13 Aug 2026 by KPT Demo",
        body: "Clarify the programme fee, add learning outcomes, and update target group details before resubmission."
      }
    ],
    resubmitted: [
      {
        title: "Post-approval changes resubmitted to KPT",
        date: "17 Aug 2026 by University Admin",
        body: `${programmeName} has approved history. The latest edited programme details were resubmitted to KPT for confirmation.`
      },
      {
        title: "Waiting for KPT confirmation",
        date: "17 Aug 2026 by KPT Demo",
        body: "KPT confirmation is pending for the post-approval changes."
      }
    ],
    rejected: [
      submittedItem,
      {
        title: "KPT rejected the submission",
        date: "13 Aug 2026 by KPT Demo",
        body: "The programme was declined at this stage. Review the rejection reason before preparing a revised submission."
      }
    ],
    draft: [
      {
        title: "Draft programme created",
        date: "13 Aug 2026 by University Admin",
        body: "The programme is still being prepared and has not been submitted to KPT."
      }
    ],
    approved: [
      submittedItem,
      {
        title: "KPT approved the programme",
        date: "13 Aug 2026 by KPT Demo",
        body: "The programme is approved and can be prepared for publishing."
      }
    ]
  };
  const items = timelineItems[status] || [
    {
      title: "No approval updates",
      date: "13 Aug 2026",
      body: "No KPT approval timeline is available for this programme status."
    }
  ];
  if (!timeline) return;
  timeline.innerHTML = [...items].reverse().map((item) => `
    <div class="activity-item">
      <strong>${item.title}</strong>
      <span>${item.date}</span>
      <p>${item.body}</p>
    </div>
  `).join("");
}

function renderProgrammeStatusNotice(status) {
  const notice = document.querySelector("#programmeStatusNotice");
  const title = document.querySelector("#programmeStatusNoticeTitle");
  const body = document.querySelector("#programmeStatusNoticeBody");
  const action = document.querySelector("#programmeStatusNoticeAction");
  const notices = {
    "pending kpt approval": {
      title: "This programme is waiting for KPT approval.",
      body: "No applicant applications can open until KPT has approved this programme.",
      action: "View submission"
    },
    "changes requested": {
      title: "KPT has requested changes before this programme can be approved.",
      body: "Requested changes: clarify programme fee, add learning outcomes, and update target group details.",
      action: "Edit requested changes"
    },
    resubmitted: {
      title: "This programme has been resubmitted to KPT.",
      body: "The requested changes were sent back to KPT. Wait for the next KPT decision before publishing.",
      action: "View resubmission"
    },
    rejected: {
      title: "KPT rejected this programme submission.",
      body: "Review the rejection reason before creating a revised programme or preparing a new submission.",
      action: "View rejection details"
    },
    draft: {
      title: "This programme is still a draft.",
      body: "Complete the required programme details, then save or submit it to KPT for approval.",
      action: "Continue editing"
    }
  };
  const item = notices[status];
  if (!notice || !title || !body || !action) return;
  notice.hidden = !item;
  if (!item) return;
  title.textContent = item.title;
  body.textContent = item.body;
  action.textContent = item.action;
  action.dataset.noticeAction = ["changes requested", "draft"].includes(status) ? status : "";
  action.dataset.noticeStatus = status;
}

createProgramme?.addEventListener("click", showProgrammeCreateForm);
cancelProgrammeCreate?.addEventListener("click", showProgrammesList);
backToProgrammes?.addEventListener("click", showProgrammesList);
backToProgrammesFromDetail?.addEventListener("click", showProgrammesList);
programmeDetailTabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveProgrammeTab(button.dataset.programmeTab));
});
editUniversityProfile?.addEventListener("click", () => {
  setUniversityProfileEditing(true, "university");
});
cancelUniversityProfile?.addEventListener("click", () => {
  setUniversityProfileEditing(false, "university");
});
changeUniversityLogo?.addEventListener("click", () => {
  universityLogoUpload?.click();
});
universityLogoUpload?.addEventListener("change", () => {
  const file = universityLogoUpload.files?.[0];
  if (!file) return;
  const logoUrl = URL.createObjectURL(file);
  if (profileLogoImage) profileLogoImage.src = logoUrl;
  if (brandLogo) brandLogo.src = logoUrl;
});
editProfileContact?.addEventListener("click", () => {
  setUniversityProfileEditing(true, "contact");
});
cancelProfileContact?.addEventListener("click", () => {
  setUniversityProfileEditing(false, "contact");
});
profileSaveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const scope = button.dataset.profileSave || "university";
    openProgrammeActionConfirm(
      "Save profile changes?",
      "This will update the university profile details in the demo.",
      () => setUniversityProfileEditing(false, scope),
      "Save"
    );
  });
});
function attachKptRequestActions() {
  document.querySelectorAll("[data-kpt-request-action]").forEach((button) => {
    button.onclick = () => {
    const row = button.closest("tr");
    const action = button.dataset.kptRequestAction;
    const requestName = row?.querySelector("strong")?.textContent.trim() || "KPT request";
    if (action === "reply") {
      openKptComplianceReply(row);
      return;
    }
    if (kptNoticeTitle) kptNoticeTitle.textContent = requestName;
    if (kptNoticeBody) {
      kptNoticeBody.innerHTML = `
        <div class="notice-detail-grid">
          <div><span>Request</span><strong>${requestName}</strong></div>
          <div><span>Status</span><strong>${row?.children[3]?.textContent.trim() || "Recorded"}</strong></div>
          <div><span>KPT message</span><strong>${row?.children[1]?.textContent.trim() || "No action required."}</strong></div>
          <div><span>Due Date</span><strong>${row?.children[2]?.textContent.trim() || "-"}</strong></div>
        </div>
      `;
    }
    if (kptNoticeModal) kptNoticeModal.hidden = false;
    };
  });
}
attachKptRequestActions();
closeKptComplianceReply?.addEventListener("click", closeKptComplianceReplyModal);
cancelKptComplianceReply?.addEventListener("click", closeKptComplianceReplyModal);
sendKptComplianceReply?.addEventListener("click", sendKptComplianceReplyToKpt);
addUserButton?.addEventListener("click", openAddUserModal);
currentUserRole?.addEventListener("change", applyCurrentUserRole);
[auditUserFilter, auditActionFilter, auditEntityFilter, auditDateFilter].forEach((control) => {
  control?.addEventListener("change", updateAuditRows);
});
auditSearch?.addEventListener("input", updateAuditRows);
auditApply?.addEventListener("click", updateAuditRows);
helpTabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveHelpTab(button.dataset.helpTab));
});
profileTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.profileTab;
    profileTabButtons.forEach((item) => item.classList.toggle("active", item === button));
    profileTabPanels.forEach((panel) => {
      const isActive = panel.dataset.profilePanel === tab;
      panel.hidden = !isActive;
      panel.classList.toggle("active", isActive);
    });
  });
});
submitSupportRequest?.addEventListener("click", () => {
  openProgrammeActionConfirm(
    "Submit support request?",
    "This will send the support request in the demo and clear the form.",
    () => {
      if (supportSubject) supportSubject.value = "";
      if (supportMessage) supportMessage.value = "";
    },
    "Submit"
  );
});
settingsTabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveSettingsTab(button.dataset.settingsTab));
});
settingsToggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    const label = toggle.closest(".settings-toggle-row")?.querySelector("strong")?.textContent.trim() || "setting";
    addAuditRecord({ action: `${toggle.checked ? "Enabled" : "Disabled"} ${label}`, entity: "Settings" });
  });
});
updatePasswordButton?.addEventListener("click", () => {
  openProgrammeActionConfirm(
    "Update password?",
    "This will update your account password in the demo.",
    () => {
      settingsPasswordInputs.forEach((input) => {
        input.value = "";
      });
    },
    "Update"
  );
});
sessionList?.addEventListener("click", (event) => {
  const revokeButton = event.target.closest("#revokeSessionButton");
  if (!revokeButton) return;
  openProgrammeActionConfirm(
    "Revoke previous session?",
    "This will remove the previous login session from this account.",
    () => {
      revokeButton.closest(".session-row")?.remove();
    },
    "Revoke"
  );
});
closeAddUser?.addEventListener("click", closeAddUserModal);
cancelAddUser?.addEventListener("click", closeAddUserModal);
addUserModal?.addEventListener("click", (event) => {
  if (event.target === addUserModal) event.stopPropagation();
});
submitAddUser?.addEventListener("click", () => {
  const isEditingUser = Boolean(editingUserRow);
  openProgrammeActionConfirm(
    isEditingUser ? "Save user changes?" : "Add this user?",
    isEditingUser ? "This will update the selected user's role and account status." : "This will create a new staff login with the selected role and temporary password.",
    addUserRow,
    isEditingUser ? "Save Changes" : "Add User"
  );
});
userTableBody?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-user-action]");
  if (!button) return;
  if ((currentUserRole?.value || "superadmin") !== "superadmin") {
    openProgrammeActionConfirm("Super Admin required", "Only Super Admin users can edit roles or change account access.", () => {}, "OK");
    return;
  }
  const row = button.closest("tr");
  const action = button.dataset.userAction;
  if (action === "edit") {
    openEditUserModal(row);
  }
});
editProgrammeDetails?.addEventListener("click", () => {
  setProgrammeDetailsEditing(true);
  if (programmeEditWarning) programmeEditWarning.hidden = true;
});
cancelProgrammeDetailsEdit?.addEventListener("click", () => {
  setProgrammeDetailsEditing(false);
  if (programmeEditWarning) programmeEditWarning.hidden = true;
});
saveProgrammeDetails?.addEventListener("click", () => {
  openProgrammeChangesModal();
});
closeProgrammeChanges?.addEventListener("click", closeProgrammeChangesModal);
cancelProgrammeChanges?.addEventListener("click", closeProgrammeChangesModal);
proceedProgrammeChanges?.addEventListener("click", () => {
  closeProgrammeChangesModal();
  setProgrammeDetailsEditing(false);
  if (programmeEditWarning) programmeEditWarning.hidden = false;
  updateActiveProgrammeStatus("Resubmitted", "status-chip blue");
  addAuditRecord({ action: `Edited approved programme details for ${getProgrammeAuditName()}`, entity: "Programme" });
});
confirmProgrammeChanges?.addEventListener("click", () => {
  if (programmeEditWarning) programmeEditWarning.hidden = true;
});
programmeStatusNoticeAction?.addEventListener("click", () => {
  const action = programmeStatusNoticeAction.dataset.noticeAction;
  if (action === "changes requested") {
    openRequestedChangesModal(action);
    return;
  }
  if (action === "draft") {
    openDraftProgrammeModal();
    return;
  }
  openKptNoticeModal(programmeStatusNoticeAction.dataset.noticeStatus || "");
});
closeRequestedChanges?.addEventListener("click", closeRequestedChangesModal);
cancelRequestedChanges?.addEventListener("click", closeRequestedChangesModal);
submitRequestedChanges?.addEventListener("click", () => {
  openProgrammeActionConfirm(
    "Submit changes to KPT?",
    "This will update the programme details and move the programme back to Pending KPT Approval.",
    applyRequestedProgrammeChanges,
    "Submit"
  );
});
closeDraftProgramme?.addEventListener("click", closeDraftProgrammeModal);
cancelDraftProgramme?.addEventListener("click", closeDraftProgrammeModal);
saveDraftProgramme?.addEventListener("click", () => {
  openProgrammeActionConfirm(
    "Save draft changes?",
    "This will update the draft programme details in the prototype.",
    applyDraftProgrammeEdits,
    "Save"
  );
});
submitDraftProgramme?.addEventListener("click", () => {
  openProgrammeActionConfirm(
    "Submit draft to KPT?",
    "This will save the draft details and move the programme to Pending KPT Approval.",
    () => {
      applyDraftProgrammeEdits();
      updateActiveProgrammeStatus("Pending KPT Approval", "status-chip amber");
    },
    "Submit"
  );
});
closeKptNotice?.addEventListener("click", closeKptNoticeModal);
doneKptNotice?.addEventListener("click", closeKptNoticeModal);

document.querySelector(".programme-gallery-grid")?.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const card = button.closest("div");
  const title = card?.querySelector("strong")?.textContent.trim() || "Programme image";
  const action = button.dataset.galleryAction === "replace" ? "replace programme gallery image" : "programme gallery";
  openPreviewModal(title, action);
});

function addStackedInput(container, labelPrefix) {
  if (!container) return;
  const nextNumber = container.querySelectorAll("label").length + 1;
  const label = document.createElement("label");
  const input = document.createElement("input");
  const button = document.createElement("button");
  input.type = "text";
  input.value = `${labelPrefix} ${nextNumber}`;
  input.setAttribute("aria-label", `${labelPrefix} ${nextNumber}`);
  button.type = "button";
  button.textContent = "X";
  button.dataset.removeItem = "";
  button.setAttribute("aria-label", `Remove ${labelPrefix.toLowerCase()}`);
  label.append(input, button);
  container.appendChild(label);
}

function removeStackedInput(event) {
  const button = event.target.closest("[data-remove-item]");
  if (!button) return;
  const container = button.closest(".stacked-inputs");
  if (container?.querySelectorAll("label").length > 1) {
    button.closest("label")?.remove();
  }
}

addProgrammeActivity?.addEventListener("click", () => addStackedInput(programmeActivities, "Activity"));
addProgrammeLearningScope?.addEventListener("click", () => addStackedInput(programmeLearningScopes, "Learning outcome"));
programmeActivities?.addEventListener("click", removeStackedInput);
programmeLearningScopes?.addEventListener("click", removeStackedInput);
browseProgrammeGallery?.addEventListener("click", () => createProgrammeGallery?.click());
createProgrammeGallery?.addEventListener("change", () => {
  const count = createProgrammeGallery.files?.length || 0;
  if (programmeGalleryCount) programmeGalleryCount.textContent = count ? `${count} image${count === 1 ? "" : "s"} selected` : "No images selected";
});
saveProgrammeDraft?.addEventListener("click", () => {
  openProgrammeActionConfirm(
    "Save this programme as draft?",
    "This will add the programme to the table as a draft. It will not be submitted to KPT yet.",
    () => createProgrammeRow("Draft"),
    "Save"
  );
});
submitProgrammeKpt?.addEventListener("click", () => {
  openProgrammeActionConfirm(
    "Submit this programme to KPT?",
    "This will add the programme to the table and mark it as Pending KPT Approval.",
    () => createProgrammeRow("Pending KPT Approval"),
    "Submit"
  );
});

programmeRows.forEach((row) => {
  attachProgrammeRowActions(row);
});

function resetProgrammePage() {
  currentProgrammePage = 1;
  updateProgrammeRows();
}

[programmePublicStatusFilter, programmesPerPage].forEach((control) => {
  control?.addEventListener("change", resetProgrammePage);
});

prevProgrammePage?.addEventListener("click", () => {
  currentProgrammePage = Math.max(1, currentProgrammePage - 1);
  updateProgrammeRows();
});

nextProgrammePage?.addEventListener("click", () => {
  currentProgrammePage += 1;
  updateProgrammeRows();
});

function updateApplicationRows() {
  refreshApplicationAgeCells();
  const selectedStatusGroups = new Set(
    [...statusGroupToggles].filter((toggle) => toggle.checked).map((toggle) => toggle.dataset.statusGroup)
  );
  const programme = programmeFilter?.value.toLowerCase() || "all programmes";
  const applicantType = applicantTypeFilter?.value.toLowerCase() || "all applicant types";
  const nationality = nationalityFilter?.value.toLowerCase() || "any nationality";
  const query = applicationSearch?.value.trim().toLowerCase() || "";
  const pageSize = applicantsPerPage?.value || "25";
  const limit = pageSize === "all" ? Infinity : Number(pageSize);
  const tableRows = document.querySelectorAll(".applications-table tbody [data-application-status]");
  const matchedRows = [];

  tableRows.forEach((row) => {
    const matchesStatusGroup = !statusGroupToggles.length || selectedStatusGroups.has(row.dataset.applicationStatus) || (row.dataset.escalated === "true" && selectedStatusGroups.has("escalated"));
    const matchesProgramme = programme === "all programmes" || row.dataset.programme === programme;
    const matchesApplicantType = applicantType === "all applicant types" || row.dataset.applicantType === applicantType;
    const matchesNationality = nationality === "any nationality" || row.dataset.nationality === nationality;
    const matchesSearch = !query || row.textContent.toLowerCase().includes(query);
    const matchesFilters = matchesStatusGroup && matchesProgramme && matchesApplicantType && matchesNationality && matchesSearch;
    row.hidden = true;
    if (matchesFilters) matchedRows.push(row);
  });
  currentApplicationOrder = matchedRows;

  const totalPages = limit === Infinity ? 1 : Math.max(1, Math.ceil(matchedRows.length / limit));
  currentApplicationPage = Math.min(currentApplicationPage, totalPages);
  const start = limit === Infinity ? 0 : (currentApplicationPage - 1) * limit;
  const end = limit === Infinity ? matchedRows.length : start + limit;
  matchedRows.slice(start, end).forEach((row) => {
    row.hidden = false;
  });

  if (paginationSummary) {
    const shownStart = matchedRows.length ? start + 1 : 0;
    const shownEnd = Math.min(end, matchedRows.length);
    paginationSummary.textContent = `Showing ${shownStart}-${shownEnd} of ${matchedRows.length}`;
  }
  if (pageIndicator) {
    pageIndicator.textContent = `Page ${currentApplicationPage} of ${totalPages}`;
  }
  if (prevPage) {
    prevPage.disabled = currentApplicationPage <= 1;
  }
  if (nextPage) {
    nextPage.disabled = currentApplicationPage >= totalPages;
  }
}

function resetApplicationPage() {
  currentApplicationPage = 1;
  updateApplicationRows();
}

function syncAllStatusFilter() {
  if (!allStatusFilters) return;
  allStatusFilters.checked = [...statusGroupToggles].every((toggle) => toggle.checked);
}

function setStatusFilterAccordion(open) {
  if (!statusFilterAccordion || !applicationStatusGroups) return;
  statusFilterAccordion.setAttribute("aria-expanded", open ? "true" : "false");
  applicationStatusGroups.hidden = !open;
}

const applicationAgeReferenceDate = new Date(2026, 7, 18);
const applicationClosedStatuses = new Set(["approved", "rejected", "on hold", "withdrawn"]);
const shortMonthIndex = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
};

function parseDashboardDate(value) {
  const match = value.match(/(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})/);
  if (!match) return null;
  const [, day, month, year] = match;
  const monthIndex = shortMonthIndex[month];
  if (monthIndex === undefined) return null;
  return new Date(Number(year), monthIndex, Number(day));
}

function getApplicationAgeText(row) {
  if (applicationClosedStatuses.has(row.dataset.applicationStatus)) return "-";
  const updatedDate = parseDashboardDate(row.children[6]?.textContent.trim() || "");
  if (!updatedDate) return "-";
  const days = Math.max(0, Math.floor((applicationAgeReferenceDate - updatedDate) / 86400000));
  if (days === 0) return "Today";
  return `${days} ${days === 1 ? "day" : "days"}`;
}

function getApplicationAgeSortValue(row) {
  if (applicationClosedStatuses.has(row.dataset.applicationStatus)) return -1;
  const updatedDate = parseDashboardDate(row.children[6]?.textContent.trim() || "");
  if (!updatedDate) return -1;
  return Math.max(0, Math.floor((applicationAgeReferenceDate - updatedDate) / 86400000));
}

function refreshApplicationAgeCell(row) {
  if (!row) return;
  let ageCell = row.querySelector(".application-age-cell");
  if (!ageCell) {
    ageCell = document.createElement("td");
    ageCell.className = "application-age-cell";
    row.appendChild(ageCell);
  }
  const ageText = getApplicationAgeText(row);
  ageCell.textContent = ageText;
  ageCell.classList.toggle("is-active", ageText !== "-");
}

function refreshApplicationAgeCells() {
  applicationRows.forEach(refreshApplicationAgeCell);
}

function updateVisibleColumns() {
  const table = document.querySelector(".applications-table");
  if (!table) return;

  columnToggles.forEach((toggle) => {
    const column = Number(toggle.dataset.columnToggle);
    const cells = table.querySelectorAll(`th:nth-child(${column}), td:nth-child(${column})`);
    cells.forEach((cell) => {
      cell.hidden = !toggle.checked;
    });
  });
}

if (applicationSearch) {
  applicationSearch.addEventListener("input", resetApplicationPage);
}

if (programmeFilter) {
  programmeFilter.addEventListener("change", resetApplicationPage);
}

if (applicantTypeFilter) {
  applicantTypeFilter.addEventListener("change", resetApplicationPage);
}

if (nationalityFilter) {
  nationalityFilter.addEventListener("change", resetApplicationPage);
}

if (applicantsPerPage) {
  applicantsPerPage.addEventListener("change", resetApplicationPage);
}

columnToggles.forEach((toggle) => {
  toggle.addEventListener("change", updateVisibleColumns);
});

statusGroupToggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    syncAllStatusFilter();
    resetApplicationPage();
  });
});

allStatusFilters?.addEventListener("change", () => {
  statusGroupToggles.forEach((toggle) => {
    toggle.checked = allStatusFilters.checked;
  });
  resetApplicationPage();
});

clearStatusFilters?.addEventListener("click", () => {
  statusGroupToggles.forEach((toggle) => {
    toggle.checked = false;
  });
  syncAllStatusFilter();
  resetApplicationPage();
});

statusFilterAccordion?.addEventListener("click", (event) => {
  if (event.target.closest("input, button, .info-tooltip, .section-tooltip, .tooltip-panel")) return;
  setStatusFilterAccordion(statusFilterAccordion.getAttribute("aria-expanded") !== "true");
});

statusFilterAccordion?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  setStatusFilterAccordion(statusFilterAccordion.getAttribute("aria-expanded") !== "true");
});

if (prevPage) {
  prevPage.addEventListener("click", () => {
    currentApplicationPage = Math.max(1, currentApplicationPage - 1);
    updateApplicationRows();
  });
}

if (nextPage) {
  nextPage.addEventListener("click", () => {
    currentApplicationPage += 1;
    updateApplicationRows();
  });
}

function getSortValue(row, key) {
  if (key === "applicant") return row.querySelector(".applicant-name")?.textContent.trim().toLowerCase() || "";
  if (key === "nationality") return row.dataset.nationality || "";
  if (key === "programme") return row.dataset.programme || "";
  if (key === "applied") return Date.parse(row.children[3]?.textContent.trim() || "") || 0;
  if (key === "status") return row.dataset.applicationStatus || "";
  if (key === "action") return row.querySelector(".mark-btn.yes") ? "yes" : "no";
  if (key === "updated") return Date.parse(row.children[6]?.textContent.trim() || "") || 0;
  if (key === "age") return getApplicationAgeSortValue(row);
  return "";
}

applicationSortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.sortKey;
    const direction = applicationSort.key === key && applicationSort.direction === "asc" ? "desc" : "asc";
    const tbody = button.closest("table")?.querySelector("tbody");
    if (!tbody) return;

    applicationSort = { key, direction };
    currentApplicationPage = 1;
    const rows = [...tbody.querySelectorAll("[data-application-status]")];
    rows.sort((first, second) => {
      const firstValue = getSortValue(first, key);
      const secondValue = getSortValue(second, key);
      if (typeof firstValue === "number" && typeof secondValue === "number") {
        return direction === "asc" ? firstValue - secondValue : secondValue - firstValue;
      }
      return direction === "asc"
        ? firstValue.localeCompare(secondValue)
        : secondValue.localeCompare(firstValue);
    });
    rows.forEach((row) => tbody.appendChild(row));
    updateApplicationRows();
  });
});

updateApplicationRows();
updateVisibleColumns();
updateProgrammeRows();

const statusMeta = {
  submitted: { label: "New Application", chip: "blue" },
  "documents required": { label: "Documents Required", chip: "amber" },
  "documents submitted": { label: "Req. Documents Submitted", chip: "blue" },
  "pre-approved": { label: "Pre-Approved", chip: "green" },
  "final documents required": { label: "Final Documents Required", chip: "amber" },
  "final documents submitted": { label: "Final Documents Submitted", chip: "purple" },
  approved: { label: "Approved", chip: "green" },
  rejected: { label: "Rejected", chip: "red" },
  "on hold": { label: "On Hold", chip: "neutral" },
  withdrawn: { label: "Withdrawn", chip: "neutral" }
};

const initialApplicationState = new Map();

applicationRows.forEach((row) => {
  initialApplicationState.set(row, {
    status: row.dataset.applicationStatus,
    updated: row.children[6]?.textContent.trim() || "",
    statusHtml: row.children[4]?.innerHTML || "",
    finalDocsSubmitted: row.dataset.applicationStatus === "final documents submitted" ? "true" : "",
    activity: []
  });
  row.demoActivity = [];
  row.demoDocumentRequests = [];
  row.demoUploadedDocuments = [];
  row.dataset.documentRequest = "";
  row.dataset.documentRequestMessage = "";
  row.dataset.offerLetterFile = "";
  row.dataset.offerLetterMessage = "";
  if (row.dataset.applicationStatus === "final documents submitted") {
    row.dataset.finalDocsSubmitted = "true";
  } else {
    row.dataset.finalDocsSubmitted = "";
  }
  if (row.dataset.applicationStatus === "final documents required") {
    const requestMessage = "Proof of payment is unclear. Please upload a clearer copy and confirm the signed offer letter.";
    row.demoDocumentRequests.push({ id: `${getRowCode(row)}-final-request`, title: "Final document / correction requested", message: requestMessage, stage: "final" });
    row.dataset.documentRequest = "Final document / correction requested";
    row.dataset.documentRequestMessage = requestMessage;
  }
});

const programmeMeta = {
  "digital entrepreneurship bootcamp": { category: "Business & Innovation", fee: "RM 4,200" },
  "malaysian heritage experience": { category: "Culture & Heritage", fee: "RM 2,100" },
  "applied ai for tourism": { category: "Technology", fee: "RM 4,800" },
  "marine conservation lab": { category: "Nature & Environment", fee: "RM 3,700" },
  "bahasa for healthcare professionals": { category: "Language & Culture", fee: "RM 2,400" },
  "fintech innovation studio": { category: "Business & Innovation", fee: "RM 4,500" },
  "smart mobility lab": { category: "Urban Studies", fee: "RM 3,300" },
  "ai heritage storytelling lab": { category: "Technology", fee: "RM 3,800" },
  "rainforest research field school": { category: "Nature & Environment", fee: "RM 4,100" },
  "borneo culture immersion": { category: "Language & Culture", fee: "RM 2,700" }
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function getDemoDate() {
  return "16 Aug 2026";
}

function getRowName(row) {
  return row?.querySelector(".applicant-name")?.textContent.trim() || "Applicant";
}

function getRowCode(row) {
  return row?.querySelector(".applicant-link small")?.textContent.trim() || "";
}

function addActivity(row, title, note, actor = "University Admin") {
  if (!row) return;
  row.demoActivity = row.demoActivity || [];
  row.demoActivity.unshift({
    title: `${getRowCode(row)} - ${title}`,
    time: `${getDemoDate()}, 10:30 AM by ${actor}`,
    note
  });
}

function getStatusConfirmation(status) {
  const confirmations = {
    "documents submitted": { title: "Confirm documents verified", message: "Mark documents as verified and move this application to the offer letter step?" },
    "pre-approved": { title: "Send pre-approval offer letter?", message: "Verify the documents and send the automatic offer letter generated from the university template?" },
    "final documents submitted": { title: "Confirm final documents submitted", message: "Mark final documents as submitted and ready for university approval review?" },
    approved: { title: "Confirm approval", message: "Approve this application and record the final university decision?" },
    rejected: { title: "Confirm rejection", message: "Reject this application? This will move it to an exit state." },
    "on hold": { title: "Confirm hold", message: "Put this application on hold? Use this when places are filled or a decision is pending." }
  };
  return confirmations[status];
}

function openStatusConfirmModal(change) {
  const confirmation = getStatusConfirmation(change.status);
  if (!confirmation) return false;
  pendingStatusChange = change;
  if (statusConfirmTitle) statusConfirmTitle.textContent = confirmation.title;
  if (statusConfirmMessage) statusConfirmMessage.textContent = confirmation.message;
  if (statusConfirmModal) statusConfirmModal.hidden = false;
  return true;
}

function openReminderConfirmModal(row, type = "document") {
  if (!row) return;
  pendingReminderAction = { row, type };
  pendingStatusChange = null;
  if (statusConfirmTitle) statusConfirmTitle.textContent = type === "final" ? "Send final document reminder?" : "Send document reminder?";
  if (statusConfirmMessage) {
    statusConfirmMessage.textContent = type === "final"
      ? "Send a reminder to the applicant to upload the requested final approval document or correction? The application status will not change."
      : "Send a reminder to the applicant to upload the requested document or correction? The application status will not change.";
  }
  if (applyStatusConfirm) applyStatusConfirm.textContent = "Send reminder";
  if (statusConfirmModal) statusConfirmModal.hidden = false;
}

function closeStatusConfirmModal() {
  pendingStatusChange = null;
  pendingReminderAction = null;
  pendingProgrammeStatusChange = null;
  pendingProgrammeDelete = null;
  pendingProgrammeAction = null;
  pendingProgrammeActionAudit = null;
  if (applyStatusConfirm) applyStatusConfirm.textContent = "Confirm";
  if (statusConfirmModal) statusConfirmModal.hidden = true;
}

function updateRowStatus(row, status, activityTitle, activityNote, options = {}) {
  if (!options.confirmed && openStatusConfirmModal({ row, status, activityTitle, activityNote })) return;
  const statusInfo = statusMeta[status] || statusMeta.submitted;
  const previousStatus = statusMeta[row.dataset.applicationStatus]?.label || row.dataset.applicationStatus || "Application";
  row.dataset.applicationStatus = status;
  if (status === "pre-approved") {
    row.dataset.offerLetterFile = row.dataset.offerLetterFile || "Automatic pre-approval offer letter";
    row.dataset.offerLetterMessage = row.dataset.offerLetterMessage || "Generated from university offer letter template.";
  }
  row.children[4].innerHTML = "";
  row.children[4].appendChild(createStatusChip(statusInfo.label, statusInfo.chip));
  row.children[6].textContent = getDemoDate();
  if (activityTitle) addActivity(row, activityTitle, activityNote || `${statusInfo.label} recorded.`);
  addAuditRecord({
    user: options.auditUser || "Nur Aisyah Rahman",
    action: `${getApplicationAuditName(row)}: ${previousStatus} -> ${statusInfo.label}`,
    entity: "Application"
  });
  updateApplicationRows();
  if (row === activeApplicantRow && applicationSidePanel && !applicationSidePanel.hidden) renderApplicationSidePanel(row);
  if (row === activeApplicantRow && applicantDetail && !applicantDetail.hidden) showApplicantDetail(row, { keepTab: true });
}

function getApplicationNextStep(status) {
  if (status === "submitted") return "Review the application and pre-approve, request documents, put on hold, or reject.";
  if (status === "documents required") return "Waiting for the applicant to upload the requested documents or corrections.";
  if (status === "documents submitted") return "Review the submitted documents, then upload the offer letter or request another correction.";
  if (status === "pre-approved") return "Waiting for final documents from the applicant.";
  if (status === "final documents required") return "Waiting for the applicant to correct or upload final approval documents.";
  if (status === "final documents submitted") return "Review final documents and approve, put on hold, or reject.";
  if (status === "approved") return "Application is approved and closed.";
  if (status === "rejected") return "Application was rejected and is closed.";
  if (status === "on hold") return "Application is paused by the university.";
  if (status === "withdrawn") return "Applicant withdrew the application.";
  return "Review the application status and continue the next step.";
}

function getApplicationStage(status) {
  if (["submitted", "documents required", "documents submitted"].includes(status)) return "documents";
  if (["final documents required", "final documents submitted", "approved", "rejected", "on hold", "withdrawn"].includes(status)) return "final";
  if (status === "pre-approved") return "final";
  return "documents";
}

function getSideStageClass(stage, currentStage, status) {
  const order = { documents: 1, final: 2 };
  if (["approved", "rejected", "on hold", "withdrawn"].includes(status)) return "complete";
  if (stage === currentStage) return "current";
  return order[stage] < order[currentStage] ? "complete" : "locked";
}

function getSideStageButton(stage, status) {
  if (stage === "documents") {
    if (status === "submitted") return `<button type="button" data-doc-action="request-document">Request document / correction</button><div class="stage-action-with-info"><button type="button" data-doc-action="send-offer">Verify & send offer letter</button><span class="info-tooltip stage-action-tooltip" tabindex="0" aria-label="Offer letter template location" data-tooltip-trigger>?<span class="tooltip-panel" role="tooltip">The offer letter is generated from University Profile > Offer Letter Template. Programme details come from the selected application and cannot be edited here.</span></span></div><button class="email-preview-action" type="button" data-doc-action="offer-email-preview" aria-label="Preview offer email"><span aria-hidden="true"></span>Preview offer email</button><button class="secondary" type="button" data-decision-status="on hold">Put on hold</button><button class="danger" type="button" data-decision-status="rejected">Reject</button>`;
    if (status === "documents submitted") return `<button type="button" data-doc-action="request-document">Request another correction</button><div class="stage-action-with-info"><button type="button" data-doc-action="send-offer">Verify & send offer letter</button><span class="info-tooltip stage-action-tooltip" tabindex="0" aria-label="Offer letter template location" data-tooltip-trigger>?<span class="tooltip-panel" role="tooltip">The offer letter is generated from University Profile > Offer Letter Template. Programme details come from the selected application and cannot be edited here.</span></span></div><button class="email-preview-action" type="button" data-doc-action="offer-email-preview" aria-label="Preview offer email"><span aria-hidden="true"></span>Preview offer email</button><button class="secondary" type="button" data-decision-status="on hold">Put on hold</button><button class="danger" type="button" data-decision-status="rejected">Reject</button>`;
    if (status === "documents required") return `<button type="button" data-side-action="simulate-documents">Simulate applicant submitted document</button><button type="button" data-doc-action="request-document">Request another correction</button><button type="button" data-side-action="remind">Send reminder</button><button class="secondary" type="button" data-decision-status="on hold">Put on hold</button><button class="danger" type="button" data-decision-status="rejected">Reject</button>`;
  }
  if (stage === "final") {
    if (status === "pre-approved") return `<button type="button" data-side-action="simulate-final">Simulate applicant sent final documents</button><button class="secondary" type="button" data-decision-status="on hold">Put on hold</button><button class="danger" type="button" data-decision-status="rejected">Reject</button>`;
    if (status === "final documents required") return `<button type="button" data-side-action="simulate-final">Simulate applicant sent final documents</button><button type="button" data-doc-action="request-final-document">Request another correction</button><button type="button" data-side-action="remind">Send reminder</button><button class="secondary" type="button" data-decision-status="on hold">Put on hold</button><button class="danger" type="button" data-decision-status="rejected">Reject</button>`;
    if (status === "final documents submitted") return `<button type="button" data-doc-action="request-final-document">Request final document / correction</button><button type="button" data-decision-status="approved">Approve application</button><button class="secondary" type="button" data-decision-status="on hold">Put on hold</button><button class="danger" type="button" data-decision-status="rejected">Reject</button>`;
  }
  return `<button type="button" data-expand-application-detail>View stage details</button>`;
}

function buildSideActivity(row, status, statusInfo, applied, updated) {
  const base = [
    { title: "Application submitted", actor: "Applicant", note: `Submitted on ${applied}.` }
  ];
  if (["documents required", "documents submitted", "pre-approved", "final documents required", "final documents submitted", "approved", "rejected", "on hold"].includes(status)) {
    base.push({ title: "Documents requested", actor: "University", note: "University requested missing documents or corrections." });
  }
  if (["documents submitted", "pre-approved", "final documents submitted", "approved"].includes(status)) {
    base.push({ title: "Requested documents submitted", actor: "Applicant", note: "Applicant uploaded the requested documents." });
  }
  if (["pre-approved", "final documents required", "final documents submitted", "approved"].includes(status)) {
    base.push({ title: "Offer letter sent", actor: "University", note: "University verified documents and sent the offer letter." });
  }
  if (["final documents required", "final documents submitted", "approved"].includes(status)) {
    base.push({ title: "Final documents submitted", actor: "Applicant", note: "Applicant submitted final approval documents." });
  }
  if (["approved", "rejected", "on hold", "withdrawn"].includes(status)) {
    base.push({ title: statusInfo.label, actor: status === "withdrawn" ? "Applicant" : "University", note: `Recorded on ${updated}.` });
  }
  (row.demoActivity || []).forEach((activity) => base.push({ title: activity.title, actor: activity.time, note: activity.note }));
  return base;
}

function buildSideReviewContent(row, status, applicantType, code) {
  const requestState = row?.dataset.documentRequest || "";
  const requestHistory = row?.demoDocumentRequests || [];
  const uploadedDocuments = row?.demoUploadedDocuments || [];
  const offerSent = ["pre-approved", "final documents required", "final documents submitted", "approved"].includes(status);
  const documentVerified = ["documents submitted", "pre-approved", "final documents required", "final documents submitted", "approved"].includes(status);
  const finalDocsSubmitted = row?.dataset.finalDocsSubmitted === "true" || ["final documents submitted", "approved"].includes(status);
  const offerFile = row?.dataset.offerLetterFile || "Offer letter";
  const finalDocs = [
    "Proof of payment",
    "Signed offer letter",
    applicantType.toLowerCase().includes("malaysian") ? "Visa document not required" : "Visa / pass document"
  ];
  const documentRows = [
    { name: "Passport copy", note: `Applicant - ${code}`, chipLabel: documentVerified ? "Verified" : status === "documents required" ? (requestState || "Action needed") : "Submitted", chip: documentVerified ? "green" : status === "documents required" ? "amber" : "blue", actions: ["View", "Download"] }
  ];
  requestHistory.filter((request) => request.stage !== "final").forEach((request, index) => {
    documentRows.push({ name: `Request ${index + 1}: ${request.title}`, note: `University - ${request.message}`, chipLabel: "Requested", chip: "amber", actions: [] });
    uploadedDocuments
      .filter((documentItem) => documentItem.requestId === request.id)
      .forEach((documentItem) => {
        documentRows.push({ name: documentItem.name, note: `Applicant - ${documentItem.note}`, chipLabel: "Submitted", chip: "blue", actions: ["View", "Download"] });
      });
  });

  const renderRow = (item) => `
    <div class="application-side-doc-row">
      <div>
        <strong>${item.name}</strong>
        <small>${item.note}</small>
      </div>
      <div>
        ${item.chipLabel === "Submitted" && item.actions.length ? "" : createStatusChip(item.chipLabel, item.chip).outerHTML}
        ${item.actions.map((action) => `<button type="button" data-doc-action="${action.toLowerCase()}" data-preview-title="${item.name}" data-preview-section="document">${action}</button>`).join("")}
      </div>
    </div>`;

  return `
    <section class="application-side-review-block">
      <h4>Document Review &amp; Offer Letter</h4>
      ${documentRows.map(renderRow).join("")}
      <div class="application-side-doc-row">
        <div>
          <strong>${offerSent ? offerFile : "Offer letter not sent"}</strong>
          <small>${offerSent ? `University - ${code}` : "Verify documents and send the automatic offer letter."}</small>
        </div>
        <div>
          ${createStatusChip(offerSent ? "Sent" : documentVerified ? "Ready" : "Locked", offerSent ? "green" : documentVerified ? "blue" : "neutral").outerHTML}
          ${offerSent ? `<button type="button" data-doc-action="view" data-preview-title="${offerFile}" data-preview-section="offer">View</button><button type="button" data-doc-action="download" data-preview-title="${offerFile}" data-preview-section="offer">Download</button>` : ""}
        </div>
      </div>
    </section>
    <section class="application-side-review-block${finalDocsSubmitted || status === "final documents required" ? "" : " muted"}">
      <h4>Final Approval</h4>
      ${requestHistory.filter((request) => request.stage === "final").map((request, index) => `
        <div class="application-side-doc-row">
          <div>
            <strong>Final request ${index + 1}: ${request.title}</strong>
            <small>University - ${request.message}</small>
          </div>
          <div>${createStatusChip("Requested", "amber").outerHTML}</div>
        </div>`).join("")}
      ${finalDocs.map((doc) => `
        <div class="application-side-doc-row">
          <div>
            <strong>${doc}</strong>
            <small>${finalDocsSubmitted ? `Applicant - ${code}` : "Appears after applicant submits final documents."}</small>
          </div>
          <div>
            ${finalDocsSubmitted ? "" : createStatusChip(offerSent ? "Pending" : "Locked", offerSent ? "amber" : "neutral").outerHTML}
            ${finalDocsSubmitted ? `<button type="button" data-doc-action="view" data-preview-title="${doc}" data-preview-section="final">View</button><button type="button" data-doc-action="download" data-preview-title="${doc}" data-preview-section="final">Download</button>` : ""}
          </div>
        </div>`).join("")}
    </section>
  `;
}

function closeApplicationSidePanel() {
  if (applicationSidePanel) applicationSidePanel.hidden = true;
  applicationRows.forEach((row) => row.classList.remove("selected-row"));
}

function getApplicationSideOrder() {
  if (!currentApplicationOrder.length) updateApplicationRows();
  return currentApplicationOrder.length ? currentApplicationOrder : [...applicationRows].filter((row) => !row.hidden);
}

function goToAdjacentApplication(direction) {
  if (!activeApplicantRow) return;
  const order = getApplicationSideOrder();
  const currentIndex = order.indexOf(activeApplicantRow);
  const nextRow = order[currentIndex + direction];
  if (!nextRow) return;
  const activeSideTab = getActiveApplicationSideTab();
  const pageSize = applicantsPerPage?.value || "25";
  const limit = pageSize === "all" ? Infinity : Number(pageSize);
  if (limit !== Infinity) {
    currentApplicationPage = Math.floor((currentIndex + direction) / limit) + 1;
    updateApplicationRows();
  }
  renderApplicationSidePanel(nextRow, activeSideTab);
}

function getActiveApplicationSideTab() {
  return applicationSidePanel?.querySelector("[data-side-tab].active")?.dataset.sideTab || "overview";
}

function renderApplicationSidePanel(row, preferredTab = getActiveApplicationSideTab()) {
  if (!row || !applicationSidePanel) return;
  activeApplicantRow = row;
  applicationRows.forEach((item) => item.classList.toggle("selected-row", item === row));
  const name = row.querySelector(".applicant-name")?.textContent.trim() || "Applicant";
  const code = row.querySelector(".applicant-link small")?.textContent.trim() || "";
  const nationality = row.children[1]?.textContent.trim() || "";
  const programme = row.querySelector(".programme-name")?.textContent.trim() || "";
  const applied = row.children[3]?.textContent.trim() || "";
  const updated = row.children[6]?.textContent.trim() || "";
  const age = getApplicationAgeText(row);
  const status = row.dataset.applicationStatus || "submitted";
  const statusInfo = statusMeta[status] || statusMeta.submitted;
  const applicantType = getApplicantType(row);
  const programmeInfo = programmeMeta[row.dataset.programme] || { category: "Short Mobility", fee: "RM 3,000" };
  const requiresStudentPass = applicantType.toLowerCase().includes("student pass");
  const currentStage = getApplicationStage(status);
  const activityItems = buildSideActivity(row, status, statusInfo, applied, updated);
  const reviewContent = buildSideReviewContent(row, status, applicantType, code);
  const activeSideTab = preferredTab === "review" ? "review" : "overview";
  const orderedRows = getApplicationSideOrder();
  const sideIndex = orderedRows.indexOf(row);
  const hasPrevious = sideIndex > 0;
  const hasNext = sideIndex >= 0 && sideIndex < orderedRows.length - 1;
  applicationSidePanel.hidden = false;
  applicationSidePanel.innerHTML = `
    <div class="application-side-head">
      <div>
        <small>${code}</small>
        <h3>${name}</h3>
        <p>${programme} ${createStatusChip(statusInfo.label, statusInfo.chip).outerHTML}</p>
      </div>
      <div class="application-side-head-actions">
        <button type="button" data-application-side-nav="previous" ${hasPrevious ? "" : "disabled"} aria-label="Previous applicant">Prev</button>
        <button type="button" data-application-side-nav="next" ${hasNext ? "" : "disabled"} aria-label="Next applicant">Next</button>
        <span class="info-tooltip side-nav-tooltip" tabindex="0" aria-label="Applicant navigation order" data-tooltip-trigger>?<span class="tooltip-panel" role="tooltip">Previous and Next follow the current filtered and sorted Applications table list, including the active status filters.</span></span>
        <button type="button" data-close-application-side aria-label="Close application quick view">X</button>
      </div>
    </div>
    <div class="application-side-layout">
      <div class="application-side-main">
        <div class="detail-tabs application-side-tabs" aria-label="Application quick view tabs">
          <button class="${activeSideTab === "overview" ? "active" : ""}" type="button" data-side-tab="overview">Overview</button>
          <button class="${activeSideTab === "review" ? "active" : ""}" type="button" data-side-tab="review">Review &amp; Approval</button>
        </div>
        <div class="application-side-tab-panel${activeSideTab === "overview" ? " active" : ""}" data-side-panel="overview"${activeSideTab === "overview" ? "" : " hidden"}>
          <div class="application-side-card-grid">
            <article class="application-side-card applicant-card">
              <h4>Applicant Details</h4>
              <div class="application-side-fields">
                <div><span>Full Name</span><strong>${name}</strong></div>
                <div><span>Nationality</span><strong>${nationality}</strong></div>
                <div><span>Phone</span><strong>+60 11-555 ${code.slice(-4)}</strong></div>
                <div><span>Applicant Type</span><strong>${applicantType}</strong></div>
                <div><span>Email</span><strong>${code.toLowerCase().replace(/[^a-z0-9]+/g, ".")}@student.demo</strong></div>
                <div><span>Identification Type</span><strong>Passport</strong></div>
              </div>
            </article>
            <article class="application-side-card programme-card">
              <h4>Programme Details</h4>
              <div class="application-side-fields">
                <div><span>Programme</span><strong>${programme}</strong></div>
                <div><span>Category</span><strong>${programmeInfo.category}</strong></div>
                <div><span>Duration</span><strong>30 Days</strong></div>
                <div><span>Fee</span><strong>${programmeInfo.fee}</strong></div>
              </div>
            </article>
            <article class="application-side-card summary-card">
              <h4>Application Summary</h4>
              <div class="application-side-fields">
                <div><span>Applied Date</span><strong>${applied}</strong></div>
                <div><span>Current Status</span><strong>${statusInfo.label}</strong></div>
                <div><span>Last Updated</span><strong>${updated}</strong></div>
                <div><span>Age</span><strong>${age}</strong></div>
                <div><span>Immigration</span><strong>${requiresStudentPass ? "Student Pass Required" : "Not required"}</strong></div>
                <div><span>Tracking Code</span><strong>${code}</strong></div>
              </div>
            </article>
          </div>
        </div>
        <div class="application-side-tab-panel${activeSideTab === "review" ? " active" : ""}" data-side-panel="review"${activeSideTab === "review" ? "" : " hidden"}>
          ${reviewContent}
          <h4 class="application-side-subtitle">Activity</h4>
          <div class="application-side-activity">
            ${activityItems.map((item) => `<div><strong>${item.title}</strong><small>${item.actor}</small><p>${item.note}</p></div>`).join("")}
          </div>
        </div>
      </div>
      <aside class="application-side-stage-column" aria-label="Application stages">
        ${["documents", "final"].map((stage) => {
          const labels = {
            documents: ["Document review & offer letter", "Review documents, request corrections, then send the automatic offer letter."],
            final: ["Final approval", "Wait for final documents, request corrections if needed, then approve."]
          };
          return `<section class="application-stage-box ${getSideStageClass(stage, currentStage, status)}">
            <h4>${labels[stage][0]}</h4>
            <p>${labels[stage][1]}</p>
            <div class="application-stage-actions">${getSideStageButton(stage, status)}</div>
          </section>`;
        }).join("")}
        <div class="application-side-actions application-side-bottom-actions">
          <button type="button" data-expand-application-detail>Expand full view</button>
        </div>
      </aside>
    </div>
  `;
}

function handleApplicationAction(row, action) {
  if (!row) return;
  const normalized = action.toLowerCase();
  if (normalized === "pre-approve") {
    updateRowStatus(row, "pre-approved", "Pre-approved application", "University pre-approved the application.");
  } else if (normalized === "approve") {
    updateRowStatus(row, "approved", "Approved application", "University approved the application.");
  } else if (normalized === "reject") {
    updateRowStatus(row, "rejected", "Rejected application", "University rejected the application.");
  } else if (normalized === "open documents") {
    setActiveDetailTab("review");
    setReviewStage("documents");
  } else if (normalized === "send reminder") {
    openReminderConfirmModal(row, "document");
  }
}

function sendApplicationReminder(row, type = "document") {
  if (!row) return;
  const isFinal = type === "final";
  const title = isFinal ? "Sent final document reminder" : "Sent document reminder";
  const note = isFinal ? "University sent a reminder for pending final approval documents." : "University sent a reminder for pending documents.";
  addActivity(row, title, note);
  addAuditRecord({ action: `${title} for ${getApplicationAuditName(row)}`, entity: "Application" });
  row.children[6].textContent = getDemoDate();
  updateApplicationRows();
  if (row === activeApplicantRow && applicationSidePanel && !applicationSidePanel.hidden) renderApplicationSidePanel(row, "review");
  if (row === activeApplicantRow && applicantDetail && !applicantDetail.hidden) showApplicantDetail(row, { keepTab: true });
}

function handleDocumentAction(action, button = null) {
  if (!activeApplicantRow) return;
  if (action === "request-document") {
    openDocumentRequestModal();
  } else if (action === "request-final-document") {
    openDocumentRequestModal("final");
  } else if (action === "view") {
    openPreviewModal(button?.dataset.previewTitle || "Document", button?.dataset.previewSection || "document");
    addActivity(activeApplicantRow, "Viewed document", "University opened a submitted document for review.");
    addAuditRecord({ action: `Viewed document for ${getApplicationAuditName()}`, entity: "Application" });
    activeApplicantRow.children[6].textContent = getDemoDate();
  } else if (action === "download") {
    addActivity(activeApplicantRow, "Downloaded document", "University downloaded a submitted document.");
    addAuditRecord({ action: `Downloaded document for ${getApplicationAuditName()}`, entity: "Application" });
    activeApplicantRow.children[6].textContent = getDemoDate();
    updateApplicationRows();
    showDownloadedNotice(button);
  } else if (action === "verify") {
    activeApplicantRow.dataset.documentRequest = "";
    sendAutomaticOfferLetter();
  } else if (action === "send-offer") {
    sendAutomaticOfferLetter();
  } else if (action === "offer-email-preview") {
    openOfferEmailPreview(activeApplicantRow);
  } else if (action === "send-final-reminder") {
    openReminderConfirmModal(activeApplicantRow, "final");
  }
}

function sendAutomaticOfferLetter() {
  if (!activeApplicantRow) return;
  activeApplicantRow.dataset.documentRequest = "";
  updateRowStatus(activeApplicantRow, "pre-approved", "Verified documents and sent offer letter", "University verified documents and sent the automatic pre-approval offer letter generated from the template.");
}

function buildOfferEmailPreview(row) {
  const name = row?.querySelector(".applicant-name")?.textContent.trim() || "Applicant";
  const code = getRowCode(row);
  const programme = row?.querySelector(".programme-name")?.textContent.trim() || "Programme";
  const applicantType = getApplicantType(row);
  const programmeInfo = programmeMeta[row?.dataset.programme] || { fee: "RM 3,000" };
  const isMalaysian = applicantType.toLowerCase().includes("malaysian");
  return `
    <div class="offer-email-preview">
      <div class="offer-email-logos">
        <img src="./MEG_2.png" alt="Malaysia EduTourism Gateway">
        <img src="./Logo.png" alt="University of Cyberjaya">
      </div>
      <h4>Pre-Approval Offer Letter</h4>
      <p><strong>Dear ${name},</strong></p>
      <p>We are pleased to confirm that ${name} has been pre-approved for ${programme} at University of Cyberjaya.</p>
      <div class="offer-programme-summary">
        <div><span>Programme</span><strong>${programme}</strong></div>
        <div><span>Duration</span><strong>30 Days</strong></div>
        <div><span>Fee</span><strong>${programmeInfo.fee}</strong></div>
        <div><span>Reference</span><strong>${code}</strong></div>
      </div>
      <p class="preview-visa-note">${isMalaysian ? "Malaysian applicant version: visa or student pass wording is omitted." : "International applicant version: this letter may be used to support visa or student pass related arrangements."}</p>
      <p>Regards,<br><strong>EduTourism Office<br>University of Cyberjaya</strong></p>
    </div>`;
}

function openOfferEmailPreview(row) {
  if (previewTitle) previewTitle.textContent = "Offer email preview";
  if (previewBody) previewBody.innerHTML = buildOfferEmailPreview(row);
  if (previewModal) previewModal.hidden = false;
}

function showDownloadedNotice(anchor) {
  document.querySelectorAll(".download-toast").forEach((toast) => toast.remove());
  const toast = document.createElement("span");
  toast.className = "download-toast";
  toast.textContent = "Downloaded";
  const target = anchor || document.body;
  target.insertAdjacentElement("afterend", toast);
  window.setTimeout(() => toast.remove(), 1400);
}

function openPreviewModal(title, section) {
  if (previewTitle) previewTitle.textContent = title;
  if (previewBody) {
    previewBody.innerHTML = "";
    previewBody.textContent = `Temporary preview placeholder for ${title}. In the full system, this area would show the uploaded ${section.toLowerCase()} file, metadata, and review notes.`;
  }
  if (previewModal) previewModal.hidden = false;
}

function closePreviewModal() {
  if (previewModal) previewModal.hidden = true;
}

function openDocumentRequestModal(mode = "document") {
  pendingDocumentAction = mode === "final" ? "request-final-document" : "request-document";
  if (documentRequestTitle) {
    documentRequestTitle.textContent = mode === "final" ? "Request final document / correction" : "Request new document / correction";
  }
  if (documentRequestLabel) {
    documentRequestLabel.textContent = "Message to applicant";
  }
  if (documentRequestMessage) {
    documentRequestMessage.value = "";
    documentRequestMessage.placeholder = mode === "final" ? "Tell the applicant which final document needs to be corrected or uploaded" : "Tell the applicant which document is needed or what needs to be corrected";
  }
  if (documentRequestModal) documentRequestModal.hidden = false;
  documentRequestMessage?.focus();
}

function closeDocumentRequestModal() {
  pendingDocumentAction = "";
  if (documentRequestModal) documentRequestModal.hidden = true;
}

function submitDocumentRequest() {
  if (!activeApplicantRow || !pendingDocumentAction) return;
  const message = documentRequestMessage?.value.trim();
  const isFinalRequest = pendingDocumentAction === "request-final-document";
  const requestTitle = isFinalRequest ? "Final document / correction requested" : "New document / correction requested";
  const requestMessage = message || (isFinalRequest ? "University requested a final approval document or correction from the applicant." : "University requested a new document or correction from the applicant.");
  activeApplicantRow.demoDocumentRequests = activeApplicantRow.demoDocumentRequests || [];
  activeApplicantRow.demoDocumentRequests.push({ id: Date.now().toString(), title: requestTitle, message: requestMessage, stage: isFinalRequest ? "final" : "documents" });
  activeApplicantRow.dataset.documentRequest = requestTitle;
  activeApplicantRow.dataset.documentRequestMessage = requestMessage;
  if (isFinalRequest) activeApplicantRow.dataset.finalDocsSubmitted = "";
  updateRowStatus(activeApplicantRow, isFinalRequest ? "final documents required" : "documents required", requestTitle, requestMessage);
  closeDocumentRequestModal();
}

function openOfferLetterModal() {
  if (offerLetterFile) offerLetterFile.value = "";
  if (offerLetterMessage) offerLetterMessage.value = "";
  if (offerLetterModal) offerLetterModal.hidden = false;
  offerLetterMessage?.focus();
}

function closeOfferLetterModal() {
  if (offerLetterModal) offerLetterModal.hidden = true;
}

function submitOfferLetter() {
  if (!activeApplicantRow) return;
  const message = offerLetterMessage?.value.trim();
  const fileName = offerLetterFile?.files?.[0]?.name || "Offer letter";
  activeApplicantRow.dataset.offerLetterFile = fileName;
  activeApplicantRow.dataset.offerLetterMessage = message || "";
  closeOfferLetterModal();
  updateRowStatus(activeApplicantRow, "pre-approved", "Verified documents and sent offer letter", message || `University verified documents, uploaded ${fileName}, and sent it to the applicant.`);
}

function simulateApplicantDocumentSubmission() {
  if (!activeApplicantRow) return;
  activeApplicantRow.demoUploadedDocuments = activeApplicantRow.demoUploadedDocuments || [];
  const nextNumber = activeApplicantRow.demoUploadedDocuments.length + 1;
  const request = activeApplicantRow.demoDocumentRequests?.at(-1);
  activeApplicantRow.demoUploadedDocuments.push({
    name: nextNumber === 1 ? "Corrected / additional document" : `Corrected / additional document ${nextNumber}`,
    note: request?.message || "Applicant uploaded the requested document.",
    requestId: request?.id || ""
  });
  activeApplicantRow.dataset.documentRequest = "";
  activeApplicantRow.dataset.documentRequestMessage = "";
  updateRowStatus(activeApplicantRow, "documents submitted", "Applicant submitted requested document", "Applicant uploaded the requested document for university review.", { confirmed: true, auditUser: "Applicant" });
}

function simulateApplicantFinalDocuments() {
  if (!activeApplicantRow) return;
  activeApplicantRow.dataset.finalDocsSubmitted = "true";
  addActivity(activeApplicantRow, "Applicant submitted final documents", "Applicant uploaded proof of payment, signed offer letter, and visa document.");
  addAuditRecord({ user: "Applicant", action: `Submitted final documents for ${getApplicationAuditName()}`, entity: "Application" });
  updateRowStatus(activeApplicantRow, "final documents submitted", "Applicant submitted final documents", "Applicant uploaded proof of payment, signed offer letter, and visa document.", { confirmed: true, auditUser: "Applicant" });
}

function getApplicantType(row) {
  const value = row.dataset.applicantType || "";
  return value
    .split(" ")
    .map((word) => word ? word[0].toUpperCase() + word.slice(1) : "")
    .join(" ")
    .replace("Visitor/tourist", "Visitor/Tourist");
}

function setActiveDetailTab(tabName = "overview") {
  let targetButton = document.querySelector(`[data-detail-tab="${tabName}"]`);
  if (!targetButton) {
    tabName = "overview";
    targetButton = document.querySelector(`[data-detail-tab="${tabName}"]`);
  }
  if (targetButton?.disabled) return;
  detailTabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.detailTab === tabName);
  });
  detailTabPanels.forEach((panel) => {
    const isActive = panel.dataset.detailPanel === tabName;
    panel.hidden = !isActive;
    panel.classList.toggle("active", isActive);
  });
}

function updateDetailTabAvailability(status) {
  detailTabButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("disabled");
  });
}

function createStatusChip(label, chip = "neutral") {
  const span = document.createElement("span");
  span.className = `status-chip ${chip}`;
  span.textContent = label;
  return span;
}

function renderDocuments(row, status, applicantType, code) {
  const requestState = row?.dataset.documentRequest || "";
  const requestHistory = row?.demoDocumentRequests || [];
  const uploadedDocuments = row?.demoUploadedDocuments || [];
  const offerSent = ["pre-approved", "final documents required", "final documents submitted", "approved"].includes(status);
  const documentVerified = ["documents submitted", "pre-approved", "final documents required", "final documents submitted", "approved"].includes(status);
  const offerFile = row?.dataset.offerLetterFile || "Offer letter";
  const documentRows = [
    { name: "Passport copy", note: `Applicant - ${code}`, chipLabel: documentVerified ? "Verified" : status === "documents required" ? (requestState || "Action needed") : "Submitted", chip: documentVerified ? "green" : status === "documents required" ? "amber" : "blue", actions: ["View", "Download"] }
  ];
  requestHistory.filter((request) => request.stage !== "final").forEach((request, index) => {
    documentRows.push({ name: `Request ${index + 1}: ${request.title}`, note: `University - ${request.message}`, chipLabel: "Requested", chip: "amber", actions: [], type: "request" });
    uploadedDocuments
      .filter((documentItem) => documentItem.requestId === request.id)
      .forEach((documentItem) => {
        documentRows.push({ name: documentItem.name, note: `Applicant - ${documentItem.note}`, chipLabel: "Submitted", chip: "blue", actions: ["View", "Download"], type: "reply" });
      });
  });
  uploadedDocuments
    .filter((documentItem) => !documentItem.requestId)
    .forEach((documentItem) => {
      documentRows.push({ name: documentItem.name, note: `Applicant - ${documentItem.note}`, chipLabel: "Submitted", chip: "blue", actions: ["View", "Download"], type: "reply" });
    });

  const reviewItems = [
    {
      section: "Document Review & Offer Letter",
      locked: false,
      rows: [
        ...documentRows,
        { name: offerSent ? offerFile : "Offer letter not uploaded", note: offerSent ? `University - ${code}` : "Offer letter will appear here after upload.", chipLabel: offerSent ? "Sent" : documentVerified ? "Ready" : "Locked", chip: offerSent ? "green" : documentVerified ? "blue" : "neutral", actions: offerSent ? ["View", "Download"] : [] }
      ]
    }
  ];

  const list = document.querySelector("#detailDocuments");
  if (!list) return;
  list.innerHTML = "";
  reviewItems.forEach((section) => {
    const sectionWrap = document.createElement("div");
    sectionWrap.className = `review-section${section.locked ? " muted" : ""}`;
    sectionWrap.innerHTML = `<h4>${section.section}</h4>`;
    if (section.locked) {
      const lockedNote = document.createElement("p");
      lockedNote.className = "locked-note";
      lockedNote.textContent = section.lockedMessage;
      sectionWrap.appendChild(lockedNote);
    }
    section.rows.forEach((documentItem) => {
      const row = document.createElement("div");
      row.className = `document-row${documentItem.type ? ` ${documentItem.type}` : ""}`;
      const content = document.createElement("div");
      content.innerHTML = `<strong>${documentItem.name}</strong><small>${documentItem.note}</small>`;
      const meta = document.createElement("div");
      meta.className = "document-meta";
      documentItem.actions.forEach((action) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = action;
        if (action === "View") {
          button.dataset.docAction = "view";
          button.dataset.previewTitle = documentItem.name;
          button.dataset.previewSection = section.section;
        }
        if (action === "Download") button.dataset.docAction = "download";
        meta.appendChild(button);
      });
      row.append(content, meta);
      sectionWrap.appendChild(row);
    });
    list.appendChild(sectionWrap);
  });

  renderUniversityActions(status);
}

function getUniversityActions(status) {
  const states = {
    submitted: {
      title: "Document decision",
      note: "A new applicant submission is ready for university review.",
      actions: [{ label: "Verify documents & send offer letter", action: "verify", primary: true }, { label: "Request new document / correction", action: "request-document" }, { label: "Put on hold", status: "on hold" }, { label: "Reject", status: "rejected" }]
    },
    "documents required": {
      title: "Waiting for applicant",
      note: "A document request was sent. You can send another request while waiting.",
      actions: [{ label: "Simulate applicant submitted", status: "submitted", primary: true }, { label: "Request new document / correction", action: "request-document" }, { label: "Put on hold", status: "on hold" }, { label: "Reject", status: "rejected" }]
    },
    "documents submitted": {
      title: "Offer letter required",
      note: "Documents are verified. Send the automatic offer letter to move this application to pre-approved.",
      actions: [{ label: "Verify documents & send offer letter", action: "send-offer", primary: true }, { label: "Request new document / correction", action: "request-document" }, { label: "Put on hold", status: "on hold" }, { label: "Reject", status: "rejected" }]
    },
    "pre-approved": {
      title: "Waiting for final documents",
      note: "Offer letter has been sent. Wait for the applicant to submit proof of payment and signed documents.",
      actions: [{ label: "Simulate applicant sent all necessary documents", status: "final documents submitted", primary: true }, { label: "Put on hold", status: "on hold" }, { label: "Reject", status: "rejected" }]
    },
    "final documents required": {
      title: "Waiting for final correction",
      note: "A final document request was sent. Wait for the applicant to upload the corrected final documents.",
      actions: [{ label: "Simulate applicant sent all necessary documents", status: "final documents submitted", primary: true }, { label: "Request another correction", action: "request-final-document" }, { label: "Send reminder", action: "send-final-reminder" }, { label: "Put on hold", status: "on hold" }, { label: "Reject", status: "rejected" }]
    },
    "final documents submitted": {
      title: "Final decision",
      note: "Final documents have been submitted. Check proof of payment before approving or rejecting.",
      actions: [{ label: "Approve", status: "approved", primary: true }, { label: "Request final document / correction", action: "request-final-document" }, { label: "Put on hold", status: "on hold" }, { label: "Reject", status: "rejected" }]
    },
    approved: {
      title: "Application approved",
      note: "Final university approval has been recorded.",
      result: "approved",
      actions: []
    },
    rejected: {
      title: "Application rejected",
      note: "Final university rejection has been recorded.",
      result: "rejected",
      actions: []
    },
    "on hold": {
      title: "Application on hold",
      note: "Application is paused, for example because places are filled or a decision is pending.",
      result: "hold",
      actions: [{ label: "Continue review", status: "submitted", primary: true }, { label: "Reject", status: "rejected" }]
    },
    withdrawn: {
      title: "Application withdrawn",
      note: "The applicant removed this application from consideration.",
      actions: []
    }
  };
  return states[status] || states.submitted;
}

function getProcessStageLabel(status) {
  const stages = {
    submitted: "Document review & offer letter",
    "documents required": "Document review & offer letter",
    "documents submitted": "Document review & offer letter",
    "pre-approved": "Final approval",
    "final documents required": "Final approval",
    "final documents submitted": "Final approval",
    approved: "Final approved",
    rejected: "Rejected",
    "on hold": "On hold",
    withdrawn: "Withdrawn"
  };
  return stages[status] || "Document review & offer letter";
}

function getDefaultReviewStage(status = activeApplicantRow?.dataset.applicationStatus || "submitted") {
  return ["pre-approved", "final documents required", "final documents submitted", "approved"].includes(status) ? "approval" : "documents";
}

function setReviewStage(stage = "") {
  activeReviewStage = stage;
  const home = document.querySelector("#reviewStageHome");
  const documentDetail = document.querySelector("#documentReviewDetail");
  const approvalDetail = document.querySelector("#approvalReviewDetail");
  if (home) home.hidden = true;
  if (documentDetail) documentDetail.hidden = stage !== "documents";
  if (approvalDetail) approvalDetail.hidden = stage !== "approval";
}

function renderReviewStageCards(status) {
  const documentVerified = ["documents submitted", "pre-approved", "final documents required", "final documents submitted", "approved"].includes(status);
  const offerSent = ["pre-approved", "final documents required", "final documents submitted", "approved"].includes(status);
  const finalDone = ["approved", "rejected"].includes(status);
  const documentCard = document.querySelector('[data-review-stage="documents"]');
  const approvalCard = document.querySelector('[data-review-stage="approval"]');
  const toFinalApproval = document.querySelector("#toFinalApproval");
  setText("#documentStageTitle", documentVerified ? "Documents reviewed and offer letter sent" : "Review documents and send offer letter");
  setText("#documentStageNote", offerSent ? "Offer letter has been sent. You can still view the document record." : "Check uploaded documents, request corrections, or send the automatic offer letter.");
  setText("#approvalStageTitle", finalDone ? "Final decision recorded" : offerSent ? "Ready for final approval" : "Proof of payment review");
  setText("#approvalStageNote", offerSent ? "Review proof of payment and record the final university decision." : "Available after the offer letter is sent.");
  documentCard?.classList.toggle("current", !offerSent && !finalDone);
  documentCard?.classList.toggle("complete", offerSent || finalDone);
  approvalCard?.classList.toggle("current", offerSent && !finalDone);
  approvalCard?.classList.toggle("complete", status === "approved");
  approvalCard?.classList.toggle("locked", !offerSent);
  if (approvalCard) approvalCard.disabled = !offerSent;
  if (toFinalApproval) {
    toFinalApproval.disabled = !offerSent;
    toFinalApproval.classList.toggle("disabled", !offerSent);
  }
  if (activeReviewStage === "approval" && !offerSent) activeReviewStage = "";
  if (!activeReviewStage) setReviewStage(getDefaultReviewStage(status));
}

function renderUniversityActions(status) {
  const actionsWrap = document.querySelector("#detailActions");
  const documentRiskActionsWrap = document.querySelector("#documentRiskActions");
  const approvalRiskActionsWrap = document.querySelector("#approvalRiskActions");
  const documentActionsWrap = document.querySelector("#documentHeaderActions");
  const approvalActionsWrap = document.querySelector("#approvalHeaderActions");
  if (!actionsWrap) return;
  const state = getUniversityActions(status);
  const finalDocsSubmitted = activeApplicantRow?.dataset.finalDocsSubmitted === "true" || ["final documents submitted", "approved"].includes(status);
  actionsWrap.innerHTML = "";
  if (documentRiskActionsWrap) documentRiskActionsWrap.innerHTML = "";
  if (approvalRiskActionsWrap) approvalRiskActionsWrap.innerHTML = "";
  if (documentActionsWrap) documentActionsWrap.innerHTML = "";
  if (approvalActionsWrap) approvalActionsWrap.innerHTML = "";

  const riskActions = state.actions.filter((item) => item.status === "on hold" || item.status === "rejected");
  const documentActions = state.actions.filter((item) => (item.action && item.action !== "request-final-document") || item.status === "submitted");
  const approvalActions = state.actions.filter((item) => item.status === "approved" || item.status === "final documents submitted" || item.action === "request-final-document");

  const stage = document.createElement("div");
  stage.className = "detail-stage-status";
  stage.innerHTML = `<span>Status:</span><strong>${getProcessStageLabel(status)}</strong>`;
  actionsWrap.appendChild(stage);

  documentActions.forEach((item) => {
    if (!documentActionsWrap) return;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label;
    if (item.primary) button.className = "primary";
    if (item.action) button.dataset.docAction = item.action;
    if (item.status) button.dataset.decisionStatus = item.status;
    documentActionsWrap.appendChild(button);
  });

  approvalActions.forEach((item) => {
    if (!approvalActionsWrap) return;
    if (item.status === "approved" && !finalDocsSubmitted) {
      const simulateButton = document.createElement("button");
      simulateButton.type = "button";
      simulateButton.textContent = "Simulate applicant sent all necessary documents";
      simulateButton.dataset.finalDocAction = "simulate";
      approvalActionsWrap.appendChild(simulateButton);
    }
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label;
    if (item.primary) button.className = "primary";
    if (item.action) button.dataset.docAction = item.action;
    if (item.status) button.dataset.decisionStatus = item.status;
    if (item.status === "final documents submitted") button.dataset.finalDocAction = "simulate";
    button.disabled = item.status === "approved" && !finalDocsSubmitted;
    button.classList.toggle("disabled", button.disabled);
    approvalActionsWrap.appendChild(button);
  });

  riskActions.forEach((item) => {
    const riskActionsWrap = ["pre-approved", "final documents required", "final documents submitted", "approved"].includes(status) ? approvalRiskActionsWrap : documentRiskActionsWrap;
    if (!riskActionsWrap) return;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label;
    button.dataset.actionLabel = item.label;
    button.dataset.decisionStatus = item.status;
    riskActionsWrap.appendChild(button);
  });

}

function renderFinalApproval(row, status, code) {
  const panel = document.querySelector("#finalApprovalPanel");
  if (!panel) return;
  const offerSent = ["pre-approved", "final documents required", "final documents submitted", "approved"].includes(status);
  const finalDocsSubmitted = row?.dataset.finalDocsSubmitted === "true" || ["final documents submitted", "approved"].includes(status);
  panel.innerHTML = "";
  const sectionWrap = document.createElement("div");
  sectionWrap.className = `review-section${!offerSent ? " muted" : ""}`;
  sectionWrap.innerHTML = "<h4>Final Approval</h4>";
  if (!offerSent) {
    const lockedNote = document.createElement("p");
    lockedNote.className = "locked-note";
    lockedNote.textContent = "Send the offer letter before final approval.";
    sectionWrap.appendChild(lockedNote);
  }
  const finalItems = finalDocsSubmitted
    ? [
      { name: "Proof of payment", note: `Applicant - ${code}`, actions: ["View", "Download"] },
      { name: "Signed offer letter", note: `Applicant - ${code}`, actions: ["View", "Download"] },
      { name: "Visa document", note: `Applicant - ${code}`, actions: ["View", "Download"] }
    ]
    : [
      { name: "Proof of payment pending", note: offerSent ? "Waiting for applicant to submit proof of payment." : "Available after the offer letter is sent.", actions: [] },
      { name: "Signed offer letter pending", note: offerSent ? "Waiting for applicant to return the signed offer letter." : "Available after the offer letter is sent.", actions: [] },
      { name: "Visa document pending", note: offerSent ? "Waiting for applicant to submit visa document if required." : "Available after the offer letter is sent.", actions: [] }
    ];
  (row?.demoDocumentRequests || [])
    .filter((request) => request.stage === "final")
    .forEach((request, index) => {
      sectionWrap.appendChild(createReviewRow({
        name: `Final request ${index + 1}: ${request.title}`,
        note: `University - ${request.message}`,
        actions: []
      }, "Final Approval"));
    });
  finalItems.forEach((item) => {
    sectionWrap.appendChild(createReviewRow(item, "Final Approval"));
  });
  panel.appendChild(sectionWrap);
}

function createReviewRow(documentItem, sectionName) {
  const row = document.createElement("div");
  row.className = "document-row";
  const content = document.createElement("div");
  content.innerHTML = `<strong>${documentItem.name}</strong><small>${documentItem.note}</small>`;
  const meta = document.createElement("div");
  meta.className = "document-meta";
  documentItem.actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = action;
    if (action === "View") {
      button.dataset.docAction = "view";
      button.dataset.previewTitle = documentItem.name;
      button.dataset.previewSection = sectionName;
    }
    if (action === "Download") button.dataset.docAction = "download";
    meta.appendChild(button);
  });
  row.append(content, meta);
  return row;
}

function renderActivity(row, status, statusInfo, name, code, applied, updated) {
  const activities = [
    { title: `${code} - New application received`, time: `${applied}, 9:20 AM by Applicant`, note: `${name} submitted a new application.` }
  ];

  if (["documents required", "documents submitted", "pre-approved", "final documents required", "final documents submitted", "approved", "rejected", "on hold"].includes(status)) {
    activities.push({ title: `${code} - University decision step`, time: `${updated}, 10:15 AM by University Admin`, note: `${statusInfo.label} recorded.` });
  }
  if (["documents submitted", "pre-approved", "final documents required", "final documents submitted", "approved"].includes(status)) {
    activities.push({ title: `${code} - Uploaded document`, time: `${updated}, 11:05 AM by Applicant`, note: "Requested document uploaded for verification." });
  }
  if (status === "withdrawn") {
    activities.push({ title: `${code} - Application withdrawn`, time: `${updated}, 3:10 PM by Applicant`, note: "Applicant withdrew the application." });
  }
  if (row?.demoActivity?.length) {
    activities.push(...row.demoActivity);
  }

  const list = document.querySelector("#detailActivity");
  if (!list) return;
  list.innerHTML = "";
  const exportRow = document.createElement("div");
  exportRow.className = "request-row activity-export";
  const exportContent = document.createElement("div");
  exportContent.innerHTML = "<strong>Audit trail</strong><small>Read-only record for university review and compliance.</small>";
  const exportMeta = document.createElement("div");
  exportMeta.className = "request-meta";
  const exportButton = document.createElement("button");
  exportButton.type = "button";
  exportButton.textContent = "Export log";
  exportButton.dataset.auditAction = "export";
  exportMeta.appendChild(exportButton);
  exportRow.append(exportContent, exportMeta);
  list.appendChild(exportRow);
  activities.reverse().forEach((activity) => {
    const item = document.createElement("div");
    item.className = "activity-item";
    item.innerHTML = `<strong>${activity.title}</strong><span>${activity.time}</span><p>${activity.note}</p>`;
    list.appendChild(item);
  });
  setText("#activitySummary", `${activities.length} events`);
}

function showApplicantDetail(row, options = {}) {
  const currentTab = document.querySelector("[data-detail-tab].active")?.dataset.detailTab || "overview";
  const currentReviewStage = activeReviewStage;
  activeApplicantRow = row;
  const name = row.querySelector(".applicant-name")?.textContent.trim() || "Applicant";
  const code = row.querySelector(".applicant-link small")?.textContent.trim() || "";
  const email = `${getRowCode(row).toLowerCase().replace(/[^a-z0-9]+/g, ".")}@student.demo`;
  const nationality = row.children[1]?.textContent.trim() || "";
  const programme = row.querySelector(".programme-name")?.textContent.trim() || "";
  const applied = row.children[3]?.textContent.trim() || "";
  const updated = row.children[6]?.textContent.trim() || "";
  const status = row.dataset.applicationStatus || "submitted";
  const statusInfo = statusMeta[status] || statusMeta.submitted;
  const programmeInfo = programmeMeta[row.dataset.programme] || { category: "Short Mobility", fee: "RM 3,000" };
  const applicantType = getApplicantType(row);
  const requiresStudentPass = applicantType.toLowerCase().includes("student pass");

  closeApplicationSidePanel();

  setText("#detailName", name);
  setText("#detailCode", code);
  setText("#detailProgramme", programme);
  setText("#detailNationality", nationality);
  setText("#detailType", applicantType);
  setText("#detailFullName", name);
  setText("#detailNationalityCard", nationality);
  setText("#detailEmail", email);
  setText("#detailPhone", "+60 11-555 " + code.slice(-4));
  setText("#detailApplicantTypeCard", applicantType);
  setText("#detailProgrammeCard", programme);
  setText("#detailCategory", programmeInfo.category);
  setText("#detailFee", programmeInfo.fee);
  setText("#detailApplied", applied);
  setText("#detailStatusText", statusInfo.label);
  setText("#detailUpdated", updated);
  setText("#detailTracking", code);
  setText("#detailImmigration", requiresStudentPass ? "Student Pass Required" : "Not required");
  setText("#detailVisitor", applicantType.toLowerCase().includes("visitor") ? "Visitor/Tourist eligible" : "Not applicable");

  const detailStatus = document.querySelector("#detailStatus");
  if (detailStatus) {
    detailStatus.className = `status-chip ${statusInfo.chip}`;
    detailStatus.textContent = statusInfo.label;
  }

  updateDetailTabAvailability(status);
  renderUniversityActions(status);
  renderDocuments(row, status, applicantType, code);
  renderFinalApproval(row, status, code);
  renderReviewStageCards(status);
  renderActivity(row, status, statusInfo, name, code, applied, updated);
  setActiveDetailTab(options.keepTab ? currentTab : "overview");
  if (options.keepTab && currentTab === "review") setReviewStage(currentReviewStage);
  if (!options.keepTab) setReviewStage(getDefaultReviewStage(status));

  if (applicationTableWrap) applicationTableWrap.hidden = true;
  if (paginationRow) paginationRow.hidden = true;
  if (tableOptionsPanel) tableOptionsPanel.hidden = true;
  if (applicationsFilterPanel) applicationsFilterPanel.hidden = true;
  if (applicantDetail) applicantDetail.hidden = false;
  applicationsPage?.classList.add("detail-mode");
  if (!options.keepTab) {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}

detailTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveDetailTab(button.dataset.detailTab);
    if (button.dataset.detailTab === "review") setReviewStage(getDefaultReviewStage());
  });
});

document.querySelector("#detailDocuments")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-doc-action]");
  if (!button) return;
  handleDocumentAction(button.dataset.docAction, button);
});

document.querySelector("#finalApprovalPanel")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-doc-action]");
  if (!button) return;
  handleDocumentAction(button.dataset.docAction, button);
});

document.querySelector("#documentHeaderActions")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-decision-status], [data-doc-action]");
  if (!button) return;
  if (button.dataset.docAction) {
    handleDocumentAction(button.dataset.docAction, button);
    return;
  }
  const status = button.dataset.decisionStatus;
  if (status === "submitted") {
    simulateApplicantDocumentSubmission();
    return;
  }
  if (status === "final documents submitted") {
    simulateApplicantFinalDocuments();
    return;
  }
  const label = button.textContent.trim();
  updateRowStatus(activeApplicantRow, status, `${label} application`, `University selected ${label.toLowerCase()} for this application.`);
});

document.querySelector("#approvalHeaderActions")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-decision-status], [data-final-doc-action], [data-doc-action]");
  if (!button) return;
  if (button.dataset.docAction) {
    handleDocumentAction(button.dataset.docAction, button);
    return;
  }
  if (button.dataset.finalDocAction === "simulate") {
    simulateApplicantFinalDocuments();
    return;
  }
  const status = button.dataset.decisionStatus;
  if (button.disabled) return;
  const label = button.textContent.trim();
  updateRowStatus(activeApplicantRow, status, `${label} application`, `University selected ${label.toLowerCase()} for this application.`);
});

document.querySelector("#toFinalApproval")?.addEventListener("click", () => {
  if (document.querySelector("#toFinalApproval")?.disabled) return;
  setReviewStage("approval");
});

document.querySelector("#detailActions")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-decision-status], [data-doc-action]");
  if (!button) return;
  if (button.dataset.docAction) {
    handleDocumentAction(button.dataset.docAction, button);
    return;
  }
  const status = button.dataset.decisionStatus;
  const label = button.textContent.trim();
  if (status === "final documents submitted") {
    simulateApplicantFinalDocuments();
    return;
  }
  updateRowStatus(activeApplicantRow, status, `${label} application`, `University selected ${label.toLowerCase()} for this application.`);
});

["#documentRiskActions", "#approvalRiskActions"].forEach((selector) => {
  document.querySelector(selector)?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-decision-status]");
    if (!button) return;
    const status = button.dataset.decisionStatus;
    const label = button.dataset.actionLabel || button.textContent.trim();
    updateRowStatus(activeApplicantRow, status, `${label} application`, `University selected ${label.toLowerCase()} for this application.`);
  });
});

document.querySelector("#detailActivity")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-audit-action='export']");
  if (!button || !activeApplicantRow) return;
  addActivity(activeApplicantRow, "Exported activity log", "University exported the audit trail for this application.");
  activeApplicantRow.children[6].textContent = getDemoDate();
  showApplicantDetail(activeApplicantRow, { keepTab: true });
});

sendDocumentRequest?.addEventListener("click", submitDocumentRequest);
closeDocumentRequest?.addEventListener("click", closeDocumentRequestModal);
cancelDocumentRequest?.addEventListener("click", closeDocumentRequestModal);
documentRequestModal?.addEventListener("click", (event) => {
  if (event.target === documentRequestModal) event.stopPropagation();
});

sendOfferLetter?.addEventListener("click", (event) => {
  event.preventDefault();
  submitOfferLetter();
});
closeOfferLetter?.addEventListener("click", closeOfferLetterModal);
cancelOfferLetter?.addEventListener("click", closeOfferLetterModal);
offerLetterModal?.addEventListener("click", (event) => {
  if (event.target === offerLetterModal) event.stopPropagation();
});

closePreview?.addEventListener("click", closePreviewModal);
donePreview?.addEventListener("click", closePreviewModal);
previewModal?.addEventListener("click", (event) => {
  if (event.target === previewModal) event.stopPropagation();
});

applyStatusConfirm?.addEventListener("click", () => {
  if (pendingReminderAction) {
    const action = pendingReminderAction;
    closeStatusConfirmModal();
    sendApplicationReminder(action.row, action.type);
    return;
  }
  if (pendingProgrammeAction) {
    const action = pendingProgrammeAction;
    const audit = pendingProgrammeActionAudit;
    pendingProgrammeAction = null;
    pendingProgrammeActionAudit = null;
    closeStatusConfirmModal();
    action();
    if (audit) addAuditRecord(audit);
    return;
  }
  if (pendingProgrammeDelete) {
    const row = pendingProgrammeDelete;
    const audit = pendingProgrammeActionAudit;
    pendingProgrammeDelete = null;
    pendingProgrammeStatusChange = null;
    pendingProgrammeAction = null;
    pendingProgrammeActionAudit = null;
    if (statusConfirmModal) statusConfirmModal.hidden = true;
    row.remove();
    if (audit) addAuditRecord(audit);
    activeProgrammeRow = null;
    programmeRows = document.querySelectorAll(".programmes-table tbody tr");
    updateProgrammeRows();
    showProgrammesList();
    return;
  }
  if (pendingProgrammeStatusChange) {
    const change = pendingProgrammeStatusChange;
    const audit = pendingProgrammeActionAudit;
    pendingProgrammeStatusChange = null;
    pendingProgrammeActionAudit = null;
    closeStatusConfirmModal();
    updateActiveProgrammeStatus(change.status, change.chipClass);
    if (audit) addAuditRecord(audit);
    return;
  }
  if (!pendingStatusChange) return;
  const change = pendingStatusChange;
  closeStatusConfirmModal();
  updateRowStatus(change.row, change.status, change.activityTitle, change.activityNote, { confirmed: true });
});

closeStatusConfirm?.addEventListener("click", closeStatusConfirmModal);
cancelStatusConfirm?.addEventListener("click", closeStatusConfirmModal);
statusConfirmModal?.addEventListener("click", (event) => {
  if (event.target === statusConfirmModal) event.stopPropagation();
});

applicationRows.forEach((row) => {
  row.querySelector(".applicant-link")?.addEventListener("click", (event) => {
    event.preventDefault();
    renderApplicationSidePanel(row);
  });
  row.querySelector('[aria-label="View application"]')?.addEventListener("click", () => {
    renderApplicationSidePanel(row);
  });
});

applicationSidePanel?.addEventListener("click", (event) => {
  const navButton = event.target.closest("[data-application-side-nav]");
  if (navButton && !navButton.disabled) {
    goToAdjacentApplication(navButton.dataset.applicationSideNav === "next" ? 1 : -1);
    return;
  }
  if (event.target.closest("[data-close-application-side]")) {
    closeApplicationSidePanel();
    return;
  }
  const sideTab = event.target.closest("[data-side-tab]");
  if (sideTab) {
    applicationSidePanel.querySelectorAll("[data-side-tab]").forEach((button) => button.classList.toggle("active", button === sideTab));
    applicationSidePanel.querySelectorAll("[data-side-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.sidePanel !== sideTab.dataset.sideTab;
      panel.classList.toggle("active", !panel.hidden);
    });
    return;
  }
  const docAction = event.target.closest("[data-doc-action]");
  if (docAction) {
    handleDocumentAction(docAction.dataset.docAction, docAction);
    return;
  }
  const decisionButton = event.target.closest("[data-decision-status]");
  if (decisionButton && activeApplicantRow) {
    updateRowStatus(activeApplicantRow, decisionButton.dataset.decisionStatus, `${statusMeta[decisionButton.dataset.decisionStatus]?.label || "Status"} recorded`, "University updated the application from the quick view.");
    return;
  }
  const sideAction = event.target.closest("[data-side-action]");
  if (sideAction && activeApplicantRow) {
    if (sideAction.dataset.sideAction === "simulate-final") {
      simulateApplicantFinalDocuments();
    } else if (sideAction.dataset.sideAction === "simulate-documents") {
      simulateApplicantDocumentSubmission();
    } else if (sideAction.dataset.sideAction === "remind") {
      openReminderConfirmModal(activeApplicantRow, activeApplicantRow.dataset.applicationStatus === "final documents required" ? "final" : "document");
    }
    return;
  }
  if (event.target.closest("[data-expand-application-detail]") && activeApplicantRow) {
    showApplicantDetail(activeApplicantRow);
  }
});

if (resetDemo) {
  resetDemo.addEventListener("click", () => {
    initialApplicationState.forEach((state, row) => {
      row.dataset.applicationStatus = state.status;
      row.dataset.documentRequest = "";
      row.dataset.documentRequestMessage = "";
      row.dataset.offerLetterFile = "";
      row.dataset.offerLetterMessage = "";
      row.dataset.finalDocsSubmitted = state.finalDocsSubmitted;
      row.demoActivity = [];
      row.demoDocumentRequests = [];
      row.demoUploadedDocuments = [];
      if (state.status === "final documents required") {
        const requestMessage = "Proof of payment is unclear. Please upload a clearer copy and confirm the signed offer letter.";
        row.demoDocumentRequests.push({ id: `${getRowCode(row)}-final-request`, title: "Final document / correction requested", message: requestMessage, stage: "final" });
        row.dataset.documentRequest = "Final document / correction requested";
        row.dataset.documentRequestMessage = requestMessage;
      }
      row.children[4].innerHTML = state.statusHtml;
      row.children[6].textContent = state.updated;
      row.hidden = false;
    });
    if (programmeFilter) programmeFilter.value = "All programmes";
    if (applicantTypeFilter) applicantTypeFilter.value = "All applicant types";
    if (nationalityFilter) nationalityFilter.value = "Any nationality";
    if (applicationSearch) applicationSearch.value = "";
    if (applicantsPerPage) applicantsPerPage.value = "25";
    columnToggles.forEach((toggle) => {
      toggle.checked = true;
    });
    statusGroupToggles.forEach((toggle) => {
      toggle.checked = true;
    });
    syncAllStatusFilter();
    currentApplicationPage = 1;
    updateVisibleColumns();
    updateApplicationRows();
    resetProgrammesDemoState();
    resetUserManagementDemoState();
    resetAuditDemoState();
    resetKptComplianceState();
    resetHelpDemoState();
    resetSettingsDemoState();
    resetNotificationsDemoState();
    if (activeApplicantRow && !applicantDetail?.hidden) {
      showApplicantDetail(activeApplicantRow, { keepTab: true });
    }
    closeDocumentRequestModal();
    closeOfferLetterModal();
    closePreviewModal();
    closeStatusConfirmModal();
    closeProgrammeChangesModal();
    closeRequestedChangesModal();
    closeDraftProgrammeModal();
    closeKptNoticeModal();
    closeNotificationsPanel();
  });
}

if (backToApplications) {
  backToApplications.addEventListener("click", () => {
    showApplicationsList();
  });
}

tooltipTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    tooltipTriggers.forEach((item) => {
      if (item !== trigger) item.classList.remove("tooltip-open");
    });
    trigger.classList.toggle("tooltip-open");
  });
});

sectionTooltipTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    sectionTooltipTriggers.forEach((item) => {
      if (item !== trigger) item.classList.remove("tooltip-open");
    });
    trigger.classList.toggle("tooltip-open");
  });
});

document.addEventListener("click", () => {
  tooltipTriggers.forEach((trigger) => trigger.classList.remove("tooltip-open"));
  sectionTooltipTriggers.forEach((trigger) => trigger.classList.remove("tooltip-open"));
});

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = new FormData(form).get("query").trim().toLowerCase();
    const searchable = getSearchableItems();
    searchable.forEach((item) => item.classList.remove("highlight"));
    if (!query) return;

    const match = searchable.find((item) => item.dataset.keywords.includes(query));
    if (match) {
      match.classList.add("highlight");
      match.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

const applicationRanges = {
  "Last 7 days": { submitted: 6, review: 4, approved: 3, other: 3 },
  "Last 30 days": { submitted: 24, review: 18, approved: 19, other: 11 },
  "Last 3 months": { submitted: 42, review: 29, approved: 38, other: 21 },
  "Last 6 months": { submitted: 55, review: 37, approved: 46, other: 34 },
  "All time": { submitted: 68, review: 45, approved: 51, other: 50 }
};

const applicationRange = document.querySelector("#applicationRange");
const applicationDonut = document.querySelector("#applicationDonut");
const applicationTotal = document.querySelector("#applicationTotal");
const statusCounts = document.querySelectorAll("[data-status-count]");
const trendInterval = document.querySelector("#trendInterval");
const trendBars = document.querySelectorAll("#trendChart > div");

function updateApplicationChart(range) {
  const data = applicationRanges[range] || applicationRanges["Last 7 days"];
  const total = Object.values(data).reduce((sum, value) => sum + value, 0);
  const submittedEnd = (data.submitted / total) * 100;
  const reviewEnd = submittedEnd + (data.review / total) * 100;
  const approvedEnd = reviewEnd + (data.approved / total) * 100;

  applicationTotal.textContent = `${total} total`;
  applicationDonut.style.setProperty("--submitted-end", `${submittedEnd}%`);
  applicationDonut.style.setProperty("--review-end", `${reviewEnd}%`);
  applicationDonut.style.setProperty("--approved-end", `${approvedEnd}%`);
  statusCounts.forEach((item) => {
    item.textContent = data[item.dataset.statusCount];
  });
}

if (applicationRange && applicationDonut && applicationTotal) {
  updateApplicationChart(applicationRange.value);
  applicationRange.addEventListener("change", () => updateApplicationChart(applicationRange.value));
}

const trendData = {
  Daily: [
    ["10 Aug", 14],
    ["11 Aug", 18],
    ["12 Aug", 24],
    ["13 Aug", 21],
    ["14 Aug", 31],
    ["15 Aug", 27],
    ["16 Aug", 36]
  ],
  Monthly: [
    ["Sep", 88],
    ["Oct", 94],
    ["Nov", 101],
    ["Dec", 97],
    ["Jan", 116],
    ["Feb", 124],
    ["Mar", 104],
    ["Apr", 128],
    ["May", 119],
    ["Jun", 146],
    ["Jul", 157],
    ["Aug", 172]
  ]
};

function updateTrendChart(interval) {
  const data = trendData[interval] || trendData.Daily;
  const max = Math.max(...data.map((item) => item[1]));
  document.querySelector("#trendChart")?.style.setProperty("--bar-count", data.length);

  trendBars.forEach((bar, index) => {
    if (!data[index]) {
      bar.hidden = true;
      return;
    }
    bar.hidden = false;
    const [label, value] = data[index];
    const height = Math.max(18, Math.round((value / max) * 100));
    const graphic = bar.querySelector("i");
    const caption = bar.querySelector("span");
    graphic.style.height = `${height}%`;
    graphic.dataset.value = value;
    graphic.setAttribute("aria-label", `${label}: ${value} applications`);
    caption.textContent = label;
  });
}

if (trendInterval && trendBars.length) {
  updateTrendChart(trendInterval.value);
  trendInterval.addEventListener("change", () => updateTrendChart(trendInterval.value));
}

