var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// Project Type
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
var Project = /** @class */ (function () {
    function Project(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
    return Project;
}());
var State = /** @class */ (function () {
    function State() {
        this.listeners = [];
    }
    State.prototype.addListener = function (listenerFn) {
        this.listeners.push(listenerFn);
    };
    return State;
}());
var ProjectState = /** @class */ (function (_super) {
    __extends(ProjectState, _super);
    function ProjectState() {
        var _this = _super.call(this) || this;
        _this.projects = [];
        return _this;
    }
    ProjectState.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    };
    ProjectState.prototype.addProject = function (title, description, numOfPeople) {
        var newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active);
        this.projects.push(newProject);
        this.updateListeners();
    };
    ProjectState.prototype.moveProject = function (projectId, newStatus) {
        var project = this.projects.find(function (prj) { return prj.id === projectId; });
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    };
    ProjectState.prototype.updateListeners = function () {
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listenerFn = _a[_i];
            listenerFn(this.projects.slice());
        }
    };
    return ProjectState;
}(State));
var projectState = ProjectState.getInstance();
function validate(validatableInput) {
    var isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null &&
        typeof validatableInput.value === "string") {
        isValid =
            isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null &&
        typeof validatableInput.value === "string") {
        isValid =
            isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min != null &&
        typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null &&
        typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}
// autobind decorator
function autobind() {
    return function (_, _2, descriptor) {
        var originalMethod = descriptor.value;
        var adjDescriptor = {
            configurable: true,
            get: function () {
                var boundFn = originalMethod.bind(this);
                return boundFn;
            },
        };
        return adjDescriptor;
    };
}
// Component Base Class
var Component = /** @class */ (function () {
    function Component(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    Component.prototype.attach = function (insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? "afterbegin" : "beforeend", this.element);
    };
    return Component;
}());
// ProjectItem Class
var ProjectItem = function () {
    var _a;
    var _classSuper = Component;
    var _instanceExtraInitializers = [];
    var _dragStartHandler_decorators;
    return _a = /** @class */ (function (_super) {
            __extends(ProjectItem, _super);
            function ProjectItem(hostId, project) {
                var _this = _super.call(this, "single-project", hostId, false, project.id) || this;
                _this.project = (__runInitializers(_this, _instanceExtraInitializers), void 0);
                _this.project = project;
                _this.configure();
                _this.renderContent();
                return _this;
            }
            Object.defineProperty(ProjectItem.prototype, "persons", {
                get: function () {
                    if (this.project.people === 1) {
                        return "1 person";
                    }
                    else {
                        return "".concat(this.project.people, " persons");
                    }
                },
                enumerable: false,
                configurable: true
            });
            ProjectItem.prototype.dragStartHandler = function (event) {
                event.dataTransfer.setData("text/plain", this.project.id);
                event.dataTransfer.effectAllowed = "move";
            };
            ProjectItem.prototype.dragEndHandler = function (_) {
                console.log("DragEnd");
            };
            ProjectItem.prototype.configure = function () {
                this.element.addEventListener("dragstart", this.dragStartHandler);
                this.element.addEventListener("dragend", this.dragEndHandler);
            };
            ProjectItem.prototype.renderContent = function () {
                this.element.querySelector("h2").textContent = this.project.title;
                this.element.querySelector("h3").textContent = this.persons + " assigned";
                this.element.querySelector("p").textContent = this.project.description;
            };
            return ProjectItem;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _dragStartHandler_decorators = [autobind()];
            __esDecorate(_a, null, _dragStartHandler_decorators, { kind: "method", name: "dragStartHandler", static: false, private: false, access: { has: function (obj) { return "dragStartHandler" in obj; }, get: function (obj) { return obj.dragStartHandler; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// ProjectList Class
var ProjectList = function () {
    var _a;
    var _classSuper = Component;
    var _instanceExtraInitializers = [];
    var _dragOverHandler_decorators;
    var _dropHandler_decorators;
    var _dragLeaveHandler_decorators;
    return _a = /** @class */ (function (_super) {
            __extends(ProjectList, _super);
            function ProjectList(type) {
                var _this = _super.call(this, "project-list", "app", false, "".concat(type, "-projects")) || this;
                _this.type = (__runInitializers(_this, _instanceExtraInitializers), type);
                _this.assignedProjects = [];
                _this.configure();
                _this.renderContent();
                return _this;
            }
            ProjectList.prototype.dragOverHandler = function (event) {
                if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
                    event.preventDefault();
                    var listEl = this.element.querySelector("ul");
                    listEl.classList.add("droppable");
                }
            };
            ProjectList.prototype.dropHandler = function (event) {
                var prjId = event.dataTransfer.getData("text/plain");
                projectState.moveProject(prjId, this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished);
            };
            ProjectList.prototype.dragLeaveHandler = function (_) {
                var listEl = this.element.querySelector("ul");
                listEl.classList.remove("droppable");
            };
            ProjectList.prototype.configure = function () {
                var _this = this;
                this.element.addEventListener("dragover", this.dragOverHandler);
                this.element.addEventListener("dragleave", this.dragLeaveHandler);
                this.element.addEventListener("drop", this.dropHandler);
                projectState.addListener(function (projects) {
                    var relevantProjects = projects.filter(function (prj) {
                        if (_this.type === "active") {
                            return prj.status === ProjectStatus.Active;
                        }
                        return prj.status === ProjectStatus.Finished;
                    });
                    _this.assignedProjects = relevantProjects;
                    _this.renderProjects();
                });
            };
            ProjectList.prototype.renderContent = function () {
                var listId = "".concat(this.type, "-projects-list");
                this.element.querySelector("ul").id = listId;
                this.element.querySelector("h2").textContent =
                    this.type.toUpperCase() + " PROJECTS";
            };
            ProjectList.prototype.renderProjects = function () {
                var listEl = document.getElementById("".concat(this.type, "-projects-list"));
                listEl.innerHTML = "";
                for (var _i = 0, _b = this.assignedProjects; _i < _b.length; _i++) {
                    var prjItem = _b[_i];
                    new ProjectItem(this.element.querySelector("ul").id, prjItem);
                }
            };
            return ProjectList;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _dragOverHandler_decorators = [autobind()];
            _dropHandler_decorators = [autobind()];
            _dragLeaveHandler_decorators = [autobind()];
            __esDecorate(_a, null, _dragOverHandler_decorators, { kind: "method", name: "dragOverHandler", static: false, private: false, access: { has: function (obj) { return "dragOverHandler" in obj; }, get: function (obj) { return obj.dragOverHandler; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _dropHandler_decorators, { kind: "method", name: "dropHandler", static: false, private: false, access: { has: function (obj) { return "dropHandler" in obj; }, get: function (obj) { return obj.dropHandler; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _dragLeaveHandler_decorators, { kind: "method", name: "dragLeaveHandler", static: false, private: false, access: { has: function (obj) { return "dragLeaveHandler" in obj; }, get: function (obj) { return obj.dragLeaveHandler; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// ProjectInput Class
var ProjectInput = function () {
    var _a;
    var _classSuper = Component;
    var _instanceExtraInitializers = [];
    var _submitHandler_decorators;
    return _a = /** @class */ (function (_super) {
            __extends(ProjectInput, _super);
            function ProjectInput() {
                var _this = _super.call(this, "project-input", "app", true, "user-input") || this;
                _this.titleInputElement = (__runInitializers(_this, _instanceExtraInitializers), void 0);
                _this.titleInputElement = _this.element.querySelector("#title");
                _this.descriptionInputElement = _this.element.querySelector("#description");
                _this.peopleInputElement = _this.element.querySelector("#people");
                _this.configure();
                return _this;
            }
            ProjectInput.prototype.configure = function () {
                this.element.addEventListener("submit", this.submitHandler);
            };
            ProjectInput.prototype.renderContent = function () { };
            ProjectInput.prototype.gatherUserInput = function () {
                var enteredTitle = this.titleInputElement.value;
                var enteredDescription = this.descriptionInputElement.value;
                var enteredPeople = this.peopleInputElement.value;
                var titleValidatable = {
                    value: enteredTitle,
                    required: true,
                };
                var descriptionValidatable = {
                    value: enteredDescription,
                    required: true,
                    minLength: 5,
                };
                var peopleValidatable = {
                    value: +enteredPeople,
                    required: true,
                    min: 1,
                    max: 5,
                };
                if (!validate(titleValidatable) ||
                    !validate(descriptionValidatable) ||
                    !validate(peopleValidatable)) {
                    alert("Invalid input, please try again!");
                    return;
                }
                else {
                    return [enteredTitle, enteredDescription, +enteredPeople];
                }
            };
            ProjectInput.prototype.clearInputs = function () {
                this.titleInputElement.value = "";
                this.descriptionInputElement.value = "";
                this.peopleInputElement.value = "";
            };
            ProjectInput.prototype.submitHandler = function (event) {
                event.preventDefault();
                var userInput = this.gatherUserInput();
                if (Array.isArray(userInput)) {
                    var title = userInput[0], desc = userInput[1], people = userInput[2];
                    projectState.addProject(title, desc, people);
                    this.clearInputs();
                }
            };
            return ProjectInput;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _submitHandler_decorators = [autobind()];
            __esDecorate(_a, null, _submitHandler_decorators, { kind: "method", name: "submitHandler", static: false, private: false, access: { has: function (obj) { return "submitHandler" in obj; }, get: function (obj) { return obj.submitHandler; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var prjInput = new ProjectInput();
var activePrjList = new ProjectList("active");
var finishedPrjList = new ProjectList("finished");
