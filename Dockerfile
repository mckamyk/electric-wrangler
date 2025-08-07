FROM electricsql/electric:latest
EXPOSE 3000
ENTRYPOINT ["/app/bin/entrypoint"]
CMD ["start"]
