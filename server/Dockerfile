FROM denoland/deno:1.45.5

WORKDIR /app

USER root

EXPOSE 8000

COPY deps.ts .
RUN deno cache deps.ts

# These steps will be re-run upon each file change in your working directory:
COPY utils ./utils
COPY src/* ./src

COPY deno.jsonc .
COPY deno.lock .

CMD ["deno", "task", "run"]