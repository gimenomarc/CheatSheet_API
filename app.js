const express = require('express');
const app = express();
const windowsCommandsRouter = require('./routes/windowsCommands');
const linuxCommandsRouter = require('./routes/linuxCommands');

app.use(express.json());
app.use('/windows-commands', windowsCommandsRouter);
app.use('/linux-commands', linuxCommandsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
