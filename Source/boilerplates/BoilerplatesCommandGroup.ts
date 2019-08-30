/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { CommandGroup, ICommand } from "@dolittle/tooling.common.commands";

const name = 'boilerplates';

const description = `Commands related to working with boilerplates.`;


export class BoilerplatesCommandGroup extends CommandGroup {

    /**
     * Instantiates an instance of {CreateCommandGroup}.
     * @param {ICommand[]} commands
     */
    constructor(commands: ICommand[]) {
        super(name, commands, description, true);
    }
}