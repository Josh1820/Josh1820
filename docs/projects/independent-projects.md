# Independent projects

I built these personal projects to apply and extend skills in AI applications, retrieval, machine learning and backend engineering. They are local prototypes and development tools. The summaries distinguish implemented functionality from experiments and extension points.

## RAG Knowledge Assistant

**Focus:** Document question answering and generative AI application development.

**Problem:** Make a collection of documents searchable and provide answers with traceable source material.

**Implementation:** Built a FastAPI application with a browser interface for PDF, text and Markdown uploads. The pipeline extracts text, creates overlapping chunks, embeds them and stores them in Chroma. Questions retrieve relevant chunks and return an answer with source snippets and available page references.

**Design choices:** Separate ingestion, vector storage, retrieval and answer-generation interfaces. Sentence Transformers provides local embeddings; an implemented OpenAI provider handles model-backed answers. Mock providers support lightweight, repeatable local tests.

**Current scope:** Local prototype. Retrieved citations and a populated response do not establish factual correctness. Live model-provider performance and retrieval quality have not been benchmarked in this portfolio review.

**Technologies:** Python, FastAPI, Chroma, Sentence Transformers, OpenAI integration, HTML/CSS/JavaScript and pytest.

## Enterprise KnowledgeOps

**Focus:** Application architecture around document knowledge workflows.

**Problem:** Organise documents across workspaces and knowledge bases, with access checks and traceable retrieval workflows.

**Implementation:** Built workspace and knowledge-base APIs, document ingestion and reprocessing, vector and lexical retrieval, chat records, citations, feedback, audit-style events and evaluation workflows. SQLAlchemy stores application metadata; Chroma stores indexed chunks.

**Design choices:** Separate application services, persistence and retrieval. Workspace access checks scope application operations. Chat can use an optional OpenAI/LangChain integration, with an extractive fallback.

**Current scope:** The current embedding implementation hashes tokens into vectors. Ingestion runs synchronously rather than through a deployed background queue. Evaluation records response and retrieval activity; it does not establish answer correctness or compliance certification.

**Technologies:** Python, FastAPI, SQLAlchemy, LangChain, Chroma, SQLite and pytest.

## Credit Intelligence

**Focus:** Connecting experimental ML modules to an application workflow.

**Problem:** Explore how document evidence, time-series experiments and analyst review functions can work together in one application.

**Implementation:** Built issuer and workspace workflows, document ingestion, retrieval, citations, rating-support endpoints, surveillance, feedback and audit-style records. Added a small Keras forecasting model and a PyTorch text classifier, with API routes for running the workflows.

**Design choices:** Use modular services and repositories, record application outputs and expose model workflows through typed API contracts. Forecasting uses sliding windows over numeric inputs. The classifier is trained on a small set of synthetic keyword-derived examples.

**Current scope:** Experimental local prototype. Retrieval uses hash embeddings, and chat assembles retrieved evidence rather than calling Claude. Text anomaly signals use keyword rules; numeric anomaly checks use tensor statistics. Model performance on independent real-world datasets has not been established.

**Technologies:** Python, FastAPI, SQLAlchemy, Chroma, LangChain interfaces, TensorFlow/Keras, PyTorch and pytest.

## Secure Backend Boilerplate

**Focus:** Reusable backend engineering.

**Implementation:** Built JWT authentication, password hashing, role checks, request validation, centralised error handling, structured logging, rate limiting, trusted-host checks and security headers. Included Docker configuration and a pytest suite.

**Current scope:** A development starter with an in-memory demonstration user store. The implemented controls are a starting point for further hardening, not a production security assessment.

**Technologies:** Python, FastAPI, Pydantic, JWT, pytest and Docker.

## Testing and QA Copilot

**Focus:** Developer tooling and static analysis.

**Implementation:** Built a browser-based tool for analysing pasted code or uploaded source files. Python AST analysis identifies functions, classes, imports and basic risk signals. Rules produce test ideas, edge-case prompts, editable pytest scaffolds and Markdown reports.

**Current scope:** Deterministic static analysis rather than LLM-generated reasoning. Generated scaffolds contain placeholders and require meaningful assertions and review before use.

**Technologies:** Python, AST, FastAPI, HTML/CSS/JavaScript and pytest.

## DevOps Release Assistant

**Focus:** Python automation and release preparation.

**Implementation:** Built a Typer CLI and optional FastAPI interface that read Git history, categorise commits, collect issue references and prepare release summaries, changelogs, checklists and rollback-plan templates.

**Current scope:** Current generation uses rules and templates. The tool prepares release material; it does not deploy applications or verify an environment's readiness.

**Technologies:** Python, Typer, FastAPI, Git, Markdown and pytest.

## Pricing Intelligence

**Focus:** Domain-specific APIs and experimental forecasting.

**Implementation:** Built pricing analytics, benchmark comparisons, valuation summaries, recommendations and document retrieval workflows. Forecasting includes a deterministic baseline and an optional TensorFlow/Keras path. Text classification and sentiment use keyword-based logic.

**Current scope:** Local prototype. The TensorFlow path can fall back to a baseline; a successful response alone does not prove that neural forecasting ran. Answer synthesis assembles retrieved snippets. PyTorch operations in the classifier do not make it a trained NLP model.

**Technologies:** Python, FastAPI, SQLAlchemy, rule-based analytics, optional TensorFlow/Keras, optional PyTorch operations and pytest.

## Financial Research and Risk

**Focus:** Backend workflows for a financial research prototype.

**Implementation:** Built workspaces, knowledge bases, document ingestion, retrieval, chat records, portfolio/risk workflows, feedback and evaluation routes. Forecasting and text classification use lightweight deterministic implementations with saved configuration artifacts.

**Current scope:** A workflow scaffold. Forecasting extrapolates a trend; classification scores token profiles. These implementations are not TensorFlow or PyTorch training pipelines, despite framework labels present in some source metadata. Retrieval uses pseudo-embeddings, and answers assemble retrieved snippets.

**Technologies:** Python, FastAPI, SQLAlchemy, SQLite, deterministic retrieval and pytest.

## Verification and next steps

All eight existing pytest suites passed in temporary copies during the local source review on 7 November 2026, using the projects' existing environments. This was a functional check, without live external LLM API calls or independent model-quality benchmarking.

Next improvements include evaluation datasets, baseline comparisons, explicit model/provider execution reporting and clearer separation of training from inference. Repository links and demonstrations should be added once their public availability has been checked.
